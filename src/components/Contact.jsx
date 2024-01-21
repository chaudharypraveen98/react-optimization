import React, { useEffect, useMemo } from "react";

function Contact({ increaseCounter }) {
  const getRandom = (num) => {
    console.log("inside random value function");
    return Math.random() * 200 * num;
  };
  // It is used to memo the function value
  const value = useMemo(() => getRandom(78), []);
  console.log("random value", value);

  console.log("contact page");

  // cleanup function to remove infinite event listeners registeration
  useEffect(() => {
    window.addEventListener("load", () => console.log("loaded"));
    return () => {
      window.removeEventListener("load", () => console.log("removed loaded"));
    };
  }, []);

  return (
    <div>
      I am a random contact page{" "}
      <button onClick={increaseCounter}>Increase from contact page</button>
    </div>
  );
}
// memo is used with usecallback to memomize the function
export default React.memo(Contact);
