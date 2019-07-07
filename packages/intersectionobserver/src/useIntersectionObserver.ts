import * as React from "react";

const initialState = {
  intersectionObj: {},
  observerInState: null,
  isVisible: false
};

interface Iaction {
  type: string;
  data: any;
}
interface Window {
  IntersectionObserver: Function;
}
function IntersectionObserverReducer(state: any, action: Iaction) {
  switch (action.type) {
    case "SETINTERSECTIONOBJ": {
      return {
        ...state,
        intersectionObj: action.data
      };
    }
    case "SETOBSERVERHANDLE": {
      return {
        ...state,
        observerInState: action.data
      };
    }
    case "SET_VISIBILITY": {
      return {
        ...state,
        isVisible: action.data
      };
    }
  }
}

const checkFeasibility = () => {
  // let windowMY: IWindow = window;
  let MyWindow: Window;
  if (!MyWindow || !MyWindow.IntersectionObserver) {
    console.warn(
      "Intersection Observer is not supported in the current browser / environment"
    );
    return false;
  }
  return true;
};
interface IOptions {
  elementRef: React.MutableRefObject<any>;
  rootRef: React.MutableRefObject<any>;
  rootMargin?: string;
  threshold?: string;
  when?: boolean;
  callback?: Function;
  visibilityCondition?: (entry: IntersectionObserverEntry) => boolean;
}

type useIntersectionObserverReturn = [
  boolean,
  IntersectionObserverEntry,
  IntersectionObserver
];

/***
 * To use the the intersection Observer
 * visibiltyCondition call back can sent , which will be having access to
 * intersection entry object
 * Read https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
 * about various attributes provided by entries
 * Each entry describes an intersection change for one observed
 *  target element:
 *  entry.boundingClientRect
 *  entry.intersectionRatio
 *  entry.intersectionRect
 *  entry.isIntersecting
 *  entry.rootBounds
 *  entry.target
 *  entry.time
 */
const defaultVisibilityCondition = (entry: IntersectionObserverEntry) => {
  if (entry.intersectionRatio >= 1) {
    return true;
  }
  return false;
};

const defaultOptions = {
  rootMargin: "0px 0px 0px 0px",
  threshold: "0, 1",
  when: true,
  visibilityCondition: defaultVisibilityCondition
};
function useIntersectionObserver(
  options: IOptions
): useIntersectionObserverReturn {
  const {
    elementRef,
    rootRef,
    rootMargin,
    threshold,
    when,
    callback,
    visibilityCondition
  } = { ...defaultOptions, ...options };

  const [state, dispatch] = React.useReducer(
    IntersectionObserverReducer,
    initialState
  );
  const { intersectionObj, observerInState, isVisible } = state;
  const observerRef = React.useRef(null);
  const callbackRef = React.useRef(null);

  /**
   * Setting callback Ref
   */

  React.useEffect(() => {
    if (!checkFeasibility) {
      return;
    }
    if (!callback) {
      const callbackDefault = function(
        entries: IntersectionObserverEntry[],
        observer: IntersectionObserver
      ) {
        entries.forEach((entry: IntersectionObserverEntry) => {
          // setIntersectionObj(entry);
          dispatch({
            type: "SETINTERSECTIONOBJ",
            data: entry
          });
          if (!observerInState) {
            dispatch({
              type: "SETOBSERVERHANDLE",
              data: observer
            });
            // setObserver(observer);
          }
          let finalVisibilityFunction = defaultVisibilityCondition;
          if (visibilityCondition) {
            finalVisibilityFunction = visibilityCondition;
          }
          dispatch({
            type: "SET_VISIBILITY",
            data: finalVisibilityFunction(entry)
          });

          // Each entry describes an intersection change for one observed
          // target element:
          //   entry.boundingClientRect
          //   entry.intersectionRatio
          //   entry.intersectionRect
          //   entry.isIntersecting
          //   entry.rootBounds
          //   entry.target
          //   entry.time
        });
      };
      callbackRef.current = callbackDefault;
    } else {
      callbackRef.current = callback;
    }
  }, [callback, observerInState, visibilityCondition]);

  /**
   * unobserving intersectionobserver when "when" key is false
   */
  React.useEffect(() => {
    if (!checkFeasibility) {
      return;
    }
    if (!when) {
      if (observerRef.current) {
        observerRef.current.unobserve(elementRef.current);
      }
    }
  }, [observerRef, elementRef, rootRef, rootMargin, when, callback]);

  /**
   * Effect responsible for creating intersection observer and
   * registering the observer for specific element
   */
  React.useEffect(() => {
    if (!checkFeasibility) {
      return;
    }
    const currentELem = elementRef.current;
    const currentRootElem = rootRef.current;
    if (when) {
      const observer = new IntersectionObserver(callbackRef.current, {
        root: currentRootElem || null,
        threshold: threshold.split(",").map(elem => parseFloat(elem)),
        rootMargin
      });
      observerRef.current = observer;

      if (currentELem && observerRef.current) {
        // console.log("currentELem  ===>", currentELem,  observerRef.current.observe);
        observerRef.current.observe(currentELem);
      }
    }
    return () => {
      if (currentELem) {
        observerRef.current.unobserve(currentELem);
      }
    };
  }, [elementRef, rootRef, rootMargin, when, callbackRef, threshold]);

  return [isVisible, intersectionObj, observerInState];
}

export { useIntersectionObserver };