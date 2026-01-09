"use client";
import React, { FormEvent, useEffect, useState } from "react";

export default function page() {
  const [name, setName] = useState("");
  const [savedName, setSavedName] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("name");
    if (stored) setSavedName(stored);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    setSavedName(name);
    setName("");
  };
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
      <form onSubmit={handleSubmit} className="border">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <button
          type="submit"
          style={{
            borderRadius: "4px",
            backgroundColor: "blue",
            color: "#ffffff",
            width: "120px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>

      <p>Your name: {savedName && savedName}</p>
    </div>
  );
}
