import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { createContext, useEffect, useState } from "react";
const ColourContext = createContext();

function ColourProvider({ children }) {
  const [currentColour, setCurrentColour] = useState("purple-div");

  return (
    <ColourContext.Provider value={{ currentColour, setCurrentColour }}>
      {children}
    </ColourContext.Provider>
  );
}

export { ColourContext, ColourProvider };
