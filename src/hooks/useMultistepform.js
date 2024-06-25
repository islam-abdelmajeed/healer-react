import React, { useState } from "react";

const useMultistepform = (steps) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  function next() {
    console.log("reigar next");
    setCurrentStepIndex((i) => {
      return i + 1;
      //   if (i >= steps.length - 1) {
      //     return i + 1;
      //   }
    });
  }
  function back() {
    setCurrentStepIndex((i) => {
      return i - 1;

      //   if (i <= 0) {
      //     return i - 1;
      //   }
    });
  }
  function goTo(idx) {
    setCurrentStepIndex(idx);
  }
  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    next,
    back,
    steps,
    isFirstStep: currentStepIndex === 0,
  };
};

export default useMultistepform;
