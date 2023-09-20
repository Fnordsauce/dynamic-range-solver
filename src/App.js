import { ChartBuilder, Combo } from "./ChartBuilder";
import { ColourSelector } from "./ColourShifter/ColourSelector.1";
import { SideNav } from "./SideNav";
import { TopNav } from "./TopNav";
import { FrameProvider } from "./FrameContext";
import "./style.css";
import React, { useContext, useEffect, useReducer } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { AuthContext, AuthProvider } from "./auth/AuthContext";
import { RecentChartsDiv } from "./RecentChartsDiv";
import Popup from "./Popup";
import { ColourProvider } from "./ColourShifter/ColourContext";
import ChartFrame from "./ChartFrame";
import AuthModal from "./auth/AuthModal";
import StartScreen from "./StartScreen";

<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  integrity="sha384-o5m5B5f5ZLeA9M3L51Rc5P4I6FfX8eRknf5W8z+E5l5u9zQ8zQ2z5xCf5B5E5J5b5"
  crossorigin="anonymous"
/>;
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
          <ColourProvider>
            <AuthProvider>
              <ChartFrame dispatch={dispatch}>
                <SideNav dispatch={dispatch} />
                <TopNav />
                <RecentChartsDiv dispatch={dispatch} />
                <ColourSelector />
              </ChartFrame>
            </AuthProvider>
          </ColourProvider>
        </FrameProvider>
      </ChakraProvider>
    </div>
  );
}
