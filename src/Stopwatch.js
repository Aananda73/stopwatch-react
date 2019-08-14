import React from "react";

function Stopwatch({ time, start, stop }) {
  return (
    <div
      style={{
        textAlign: "center",
        margin: "auto",
        padding: "20px 60px",
        top: "50%",
        left: "50%",
        position: "relative",
        transform: "translate(-22%)"
      }}
    >
      <div
        style={{
          width: "70vh",
          height: "70vh",
          border: "5px solid red",
          borderRadius: "50%"
        }}
      >
        <h1 style={{ textAlign: "center", fontSize: "120px" }}>{time}</h1>
        <button
          onClick={start}
          style={{
            padding: " 5px 20px",
            color: "white",
            backgroundColor: "green",
            border: "none"
          }}
        >
          Start
        </button>
        <button
          onClick={stop}
          style={{
            padding: " 5px 20px",
            color: "white",
            backgroundColor: "red",
            border: "none"
          }}
        >
          Stop
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
