import { ChartBuilder, Combo } from "./ChartBuilder";
import { ColourSelector } from "./ColourSelector.1";
import { SideNav } from "./SideNav";
import { TopNav } from "./TopNav";
import { FrameProvider } from "./FrameContext";
import "./style.css";
import React, { useReducer } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthProvider } from "./auth/AuthContext";
import { RecentChartsDiv } from "./RecentChartsDiv";

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
          <AuthProvider>
            <ChartBuilder dispatch={dispatch} oncontextmenu="return false;" />
            <SideNav dispatch={dispatch} />
            <TopNav />
            <RecentChartsDiv dispatch={dispatch} />
            <ColourSelector />
          </AuthProvider>
        </FrameProvider>
      </ChakraProvider>
    </div>
  );
}
