import React from "react";
import load from "../assets/image/Blocks-1s-200px.svg";
export default function loading() {
  return (
    <div className="loading">
      <img src={load} alt="loading ..." />
    </div>
  );
}
