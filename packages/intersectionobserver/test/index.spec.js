/**
 * @jest-environment jsdom
 */
import React from "react";
import useIntersectionObserver from "..";

describe("useIntersectionObserver", () => {
  it("should be defined", () => {
    expect(useIntersectionObserver).toBeDefined();
  });
});

// figure out tests
