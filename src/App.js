import { ChartBuilder, Combo } from "./ChartBuilder";
import { ColourSelector } from "./ColourSelector.1";
import { SideNav } from "./SideNav";
import { TopNav } from "./TopNav";
import "./style.css";
import React from "react";

export default function App() {
  return (
    <div className="main">
      {window.addEventListener("contextmenu", (e) => e.preventDefault())}
      <ChartBuilder oncontextmenu="return false;" />
      <SideNav />
      <TopNav />
      <ColourSelector />
    </div>
  );
}
export function QuickHighlight({
  handleBottom,
  handleBottomTwo,
  handleBottomThree,
}) {
  return (
    <div className="group-7">
      <div className="saved-copies-2" onClick={handleBottom}>
        <div className="text-wrapper-6">Bottom</div>
        <div className="text-wrapper-6">25%</div>
      </div>
      <div className="saved-copies-3" onClick={handleBottomTwo}>
        <div className="text-wrapper-6">Bottom</div>
        <div className="text-wrapper-6">50%</div>
      </div>
      <div className="saved-copies-4" onClick={handleBottomThree}>
        <div className="text-wrapper-6">Bottom</div>
        <div className="text-wrapper-6">75%</div>
      </div>
    </div>
  );
}
