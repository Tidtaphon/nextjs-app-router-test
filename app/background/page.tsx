import React from "react";

export default function page() {
  return (
    <div
      style={{
        backgroundColor: "skyblue",
        height: "100dvh",
        color: "white",
      }}
    >
      <div style={{ display: "flex", justifyContent: "right" }}>
        <a
          href="/"
          className="flex justify-center items-center h-7.5 w-30 bg-blue-400"
        >
          Back To Home
        </a>
      </div>
      <h3>Hello</h3>
      <p>Test Text Color</p>
    </div>
  );
}
