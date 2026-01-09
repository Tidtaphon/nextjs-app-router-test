"use client";
import React, { useState } from "react";

export default function BtnCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((c) => c + 1);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>Clicked: {count} times</p>
      <button
        style={{
          borderRadius: "4px",
          backgroundColor: "blue",
          color: "#ffffff",
          width: "120px",
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        Click me
      </button>
    </div>
  );
}
