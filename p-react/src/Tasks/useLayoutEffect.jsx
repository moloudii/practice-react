import React, { useState, useEffect, useLayoutEffect } from "react";

export default function UseLayoutEffectComponent() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    //   setCounter((c) => c + 1);
    console.log("use Effect");
  }, []);
  useLayoutEffect(() => {
    setCounter((c) => c + 1);
    console.log("use Layout Effect");
  }, []);
  console.log("render");
  return (
    <div className="container">
      <p>Counter id : {counter}</p>
    </div>
  );
}
