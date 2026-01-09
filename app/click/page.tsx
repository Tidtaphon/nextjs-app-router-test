import React from "react";
import BtnCounter from "../components/BtnCounter";

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
      <BtnCounter />
    </>
  );
}
