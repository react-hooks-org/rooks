---
id: use-timeout
title: use-timeout
sidebar_label: use-timeout
---

   

## About

setTimeout hook for react.
<br/>

## Installation

    npm install --save @rooks/use-timeout

## Importing the hook

```javascript
import useTimeout from "@rooks/use-timeout"
```

## Usage

```jsx
function TimeoutComponent() {
  function doAlert() {
    window.alert("timeout expired!");
  }
  const { start, clear } = useTimeout(doAlert, 2000);
  return (
    <>
      <button onClick={start}> Start timeout </button>
      <button onClick={clear}> Clear timeout </button>
    </>
  );
}

render(<TimeoutComponent/>)
```

### Arguments

| Arguments | Type     | Description                                              | Default value |
| --------- | -------- | -------------------------------------------------------- | ------------- |
| callback  | function | Function to be executed in timeout                       | undefind      |
| delay     | Number   | Number in milliseconds after which callback is to be run | 0             |

### Returned Object keys

| Returned object attributes | Type     | Description           |
| -------------------------- | -------- | --------------------- |
| clear                      | function | Clear the timeout     |
| start                      | function | Start the timeout     |
| isActive                   | boolean  | Is the timeout active |


## Join Bhargav's discord server
You can click on the floating discord icon at the bottom right of the screen and talk to us in our server.

    