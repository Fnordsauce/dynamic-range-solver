import React, { useContext, useEffect, useState } from "react";
import { FrameContext } from "./FrameContext";

export function Combo({ children, rank, isDown, setIsDown }) {
  // Access the information
  const { ranked, handUndo, handHistory, undone, setUndone, reset, setReset } =
    useContext(FrameContext);
  const [highlight, setHighlight] = useState("box-4");

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
