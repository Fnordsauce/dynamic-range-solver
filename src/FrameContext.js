import { createContext, useState } from "react";

// 1) Create Context
const FrameContext = createContext();
function FrameProvider({ children }) {
  // Intial coverage for quick highlight state
  const [ranked, setRanked] = useState(170);
  // Array that holds the handhistory
  const [handHistory, setHandHistory] = useState([]);
  // Undo State functionaility
  const [undone, setUndone] = useState(true);

  //RESET State :
  const [reset, setReset] = useState(false);

  // This function adds the rank fo the hand click to the handHistory
  function handUndo({ rank }) {
    if (handHistory.length >= 10) handHistory.length = 0;
    handHistory.push(rank);
    console.log(handHistory);
  }

  return (
    <FrameContext.Provider
      value={{
        ranked,
        setRanked,
        handUndo,
        undone,
        setUndone,
        handHistory,
        reset,
        setReset,
      }}
    >
      {children}
    </FrameContext.Provider>
  );
  // 2) Provide the Value to the children of the sea
}

export { FrameProvider, FrameContext };
