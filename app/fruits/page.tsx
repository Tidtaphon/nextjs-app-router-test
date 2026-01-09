import React from "react";

export default function page() {
  const fruits = ["Apple", "Banana", "Orange"];

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "right" }}>
        <a
          href="/"
          className="flex justify-center items-center h-7.5 w-30 bg-blue-400"
        >
          Back To Home
        </a>
      </div>
      <ul style={{ listStyleType: "circle", padding: "30px" }}>
        {fruits.map((f: string, i: number) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
}
