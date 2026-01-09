"use client";
import React from "react";

export default function page() {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "right" }}>
        <a
          href="/"
          className="flex justify-center items-center h-7.5 w-30 bg-blue-400"
        >
          Back To Home
        </a>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{
            borderRadius: "4px",
            backgroundColor: "blue",
            color: "#ffffff",
            width: "120px",
            cursor: "pointer",
          }}
          onClick={() => alert("Button clicked!")}
        >
          Click Alert
        </button>
      </div>
    </>
  );
}
