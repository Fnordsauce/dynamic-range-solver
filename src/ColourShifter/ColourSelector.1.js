import React, { useContext } from "react";
import { ColourContext } from "./ColourContext";

export function ColourSelector() {
  const { setCurrentColour, currentColour } = useContext(ColourContext);
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
  console.log("colour", currentColour);
  return (
    <div className="group-8">
      <div
        className="text-42"
        style={{ marginLeft: "-30px", marginTop: "125px" }}
      >
        Please Select a Colour{" "}
      </div>
      <div
        className={currentColour === "orange-div" ? "box-8-active" : "box-8"}
        onClick={handleOrangeChange}
      />
      <div
        className={currentColour === "purple-div" ? "box-9-active" : "box-9"}
        onClick={handlePurpleChange}
      />
      <div
        className={currentColour === "pink-div" ? "box-10-active" : "box-10"}
        onClick={handlePinkChange}
      />
      <div
        className={currentColour === "green-div" ? "box-11-active" : "box-11"}
        onClick={handleGreenChange}
      />
    </div>
  );
}
