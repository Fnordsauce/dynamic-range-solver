import React, { useContext, useEffect, useState } from "react";
import { FrameContext } from "./FrameContext";
import { Highlight } from "@chakra-ui/react";
import { ColourContext } from "./ColourShifter/ColourContext";
import { FirebaseError } from "firebase/app";

export function Combo({ children, rank, isDown, setIsDown, pos }) {
  // Access the information
  const {
    ranked,
    handUndo,
    handHistory,
    undone,
    setUndone,
    reset,
    setReset,
    zeroArray,
    setChartData,
    chartData,
  } = useContext(FrameContext);
  const { currentColour } = useContext(ColourContext);
  const [highlight, setHighlight] = useState("default-div");

  //CUSTOM HOOK, LOADS THE NEW CHART FROM FIREBASE
  // COlours changes effect = need to add addtional if statement to account for additional numbers
  useEffect(
    function () {
      // Split the string into two parts using the comma as the delimiter
      const parts = pos.split(",");

      // Now, you can assign the two parts to separate variables
      const firstVar = parseInt(parts[0]); // Convert the first part to an integer
      const secondVar = parseInt(parts[1]); // Convert the second part to an integer

      const firstVar2 = firstVar - 1;
      const secondVar2 = secondVar - 1;
      if (chartData.length >= 12) {
        if (chartData[firstVar2][secondVar2] === 1) setHighlight("purple-div");

        if (chartData[firstVar2][secondVar2] === 0) setHighlight("default-div");
        if (chartData[firstVar2][secondVar2] === 2) setHighlight("pink-div");

        if (chartData[firstVar2][secondVar2] === 3) setHighlight("orange-div");
      }
    },
    [chartData, pos]
  );

  // CUSTOM HOOK : Enables the quickhighlight feature
  // No effect
  useEffect(
    function () {
      if (ranked <= rank) setHighlight("purple-div");
      if (ranked > rank) setHighlight("default-div");
    },
    [ranked, rank]
  );

  // CUSTOM HOOK - Creates THE FIRESTORE DATA CHART
  useEffect(
    function () {
      // Split the string into two parts using the comma as the delimiter
      const parts = pos.split(",");

      // Now, you can assign the two parts to separate variables
      const firstVar = parseInt(parts[0]); // Convert the first part to an integer
      const secondVar = parseInt(parts[1]); // Convert the second part to an integer
      const firstVar2 = firstVar - 1;
      const secondVar2 = secondVar - 1;
      if (highlight === "default-div") zeroArray[firstVar2][secondVar2] = 0;
      if (highlight === "purple-div") zeroArray[firstVar2][secondVar2] = 1;
      if (highlight === "pink-div") zeroArray[firstVar2][secondVar2] = 2;
      if (highlight === "orange-div") zeroArray[firstVar2][secondVar2] = 3;
    },
    [highlight, handHistory, undone, rank, highlight, setUndone]
  );

  // Undo Hook
  useEffect(
    function () {
      if (undone & (handHistory[handHistory.length - 1] === rank)) {
        if (highlight === "default-div") setHighlight("purple-div");
        if (highlight === "purple-div") setHighlight("default-div");
        handHistory.pop();
        setUndone(false);
      }
    },
    [handHistory, undone, rank, highlight, setUndone]
  );
  // RESET CHart hook
  useEffect(
    function () {
      if (reset) setHighlight("default-div");
      setReset(false);
    },
    [highlight, reset]
  );

  function mouseDown() {
    setIsDown(true);
  }
  function mouseUp() {
    setIsDown(false);
  }
  // Global context may be Needed
  function mouseOver() {
    if (isDown) {
      if (currentColour === "purple-div") setHighlight("purple-div");
      if (currentColour === "default-div") setHighlight("default-div");
      if (currentColour === "pink-div") setHighlight("pink-div");
      if (currentColour === "orange-div") setHighlight("orange-div");
    }
  }
  // Global context may be Needed
  function markHighlight() {
    handUndo({ rank, highlight });
    if (currentColour === "purple-div") setHighlight("purple-div");
    if (currentColour === "default-div") setHighlight("default-div");
    if (currentColour === "pink-div") setHighlight("pink-div");
    if (currentColour === "orange-div") setHighlight("orange-div");
  }

  return (
    <div
      className={highlight}
      onClick={markHighlight}
      // onContextMenu={}
      onMouseDown={mouseDown}
      onMouseUp={mouseUp}
      onMouseOver={mouseOver}
    >
      <div className="text">{children}</div>
    </div>
  );
}
