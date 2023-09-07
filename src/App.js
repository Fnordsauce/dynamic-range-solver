import { ChartBuilder, Combo } from "./ChartBuilder";
import { ColourSelector } from "./ColourSelector.1";
import { SideNav } from "./SideNav";
import { TopNav } from "./TopNav";
import { FrameProvider } from "./FrameContext";
import "./style.css";
import React, { useReducer } from "react";
import { ChakraProvider } from "@chakra-ui/react";

const intialState = {
  status: "notReady",
};

function reducer(state, action) {
  return;
}
export default function App() {
  const [{ status }, dispatch] = useReducer(reducer, intialState);

  return (
    <div className="main">
      {window.addEventListener("contextmenu", (e) => e.preventDefault())}
      <ChakraProvider>
        <FrameProvider>
          <ChartBuilder dispatch={dispatch} oncontextmenu="return false;" />
          <SideNav />
          <TopNav />
          <ColourSelector />
        </FrameProvider>
      </ChakraProvider>
    </div>
  );
}
