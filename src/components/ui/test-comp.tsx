import React from "react";

const test = () => {
  const variant = "outline";
  return (
    <div className={`px-2 ${variant === "outline" ? "border" : ""}`}></div>
  );
};

export default test;
