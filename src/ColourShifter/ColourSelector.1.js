import React, { useContext } from "react";
import { ColourContext } from "./ColourContext";

export function ColourSelector() {
  const { setCurrentColour } = useContext(ColourContext);
  function handlePurpleChange() {
    setCurrentColour("purple-div");
  }
  function handlePinkChange() {
    setCurrentColour("pink-div");
  }
  function handleOrangeChange() {
    setCurrentColour("orange-div");
  }
  function handleGreenChange() {}

  return (
    <div className="group-8">
      <div className="box-8" onClick={handleOrangeChange} />
      <div className="box-9" onClick={handlePurpleChange} />
      <div className="box-10" onClick={handlePinkChange} />
      <div className="box-11" onClick={handleGreenChange} />
    </div>
  );
}
