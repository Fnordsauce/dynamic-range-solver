import React, { useContext, useEffect, useState } from "react";
import { FrameContext } from "./FrameContext";
import { Highlight } from "@chakra-ui/react";

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
  const [highlight, setHighlight] = useState("box-4");

  //CUSTOM HOOK, LOADS THE NEW CHART FROM FIREBASE

  useEffect(
    function () {
      // Split the string into two parts using the comma as the delimiter
      const parts = pos.split(",");

      // Now, you can assign the two parts to separate variables
      const firstVar = parseInt(parts[0]); // Convert the first part to an integer
      const secondVar = parseInt(parts[1]); // Convert the second part to an integer

      const firstVar2 = firstVar - 1;
      const secondVar2 = secondVar - 1;
      console.log(firstVar2, secondVar2);
      const historicalChartData = chartData;
      console.log("chartdata", chartData);
      if (chartData.length >= 12) {
        if (chartData[firstVar2][secondVar2] === 1)
          setHighlight("text-wrapper");

        if (chartData[firstVar2][secondVar2] === 0) setHighlight("box-4");
      }
    },
    [chartData, pos]
  );

  // CUSTOM HOOK : Enables te quickhighlight feature
  useEffect(
    function () {
      if (ranked <= rank) setHighlight("text-wrapper");
      if (ranked > rank) setHighlight("box-4");
    },
    [ranked, rank]
  );

  useEffect(
    function () {
      // Split the string into two parts using the comma as the delimiter
      const parts = pos.split(",");

      // Now, you can assign the two parts to separate variables
      const firstVar = parseInt(parts[0]); // Convert the first part to an integer
      const secondVar = parseInt(parts[1]); // Convert the second part to an integer
      const firstVar2 = firstVar - 1;
      const secondVar2 = secondVar - 1;
      if (highlight === "box-4") zeroArray[firstVar2][secondVar2] = 0;
      if (highlight === "text-wrapper") zeroArray[firstVar2][secondVar2] = 1;
    },
    [highlight, handHistory, undone, rank, highlight, setUndone]
  );

  useEffect(
    function () {
      if (undone & (handHistory[handHistory.length - 1] === rank)) {
        if (highlight === "box-4") setHighlight("text-wrapper");
        if (highlight === "text-wrapper") setHighlight("box-4");
        handHistory.pop();
        setUndone(false);
      }
    },
    [handHistory, undone, rank, highlight, setUndone]
  );

  useEffect(
    function () {
      if (reset) setHighlight("box-4");
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
  function mouseOver() {
    if (isDown) {
      if (highlight === "box-4") setHighlight("text-wrapper");
      if (highlight === "text-wrapper") setHighlight("box-4");
    }
  }

  function markHighlight() {
    handUndo({ rank, highlight });
    if (highlight === "box-4") setHighlight("text-wrapper");
    if (highlight === "text-wrapper") setHighlight("box-4");

    console.log({ children }); // Very Useful for contextual confidence
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
