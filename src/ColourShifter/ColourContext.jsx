import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/firebase";
import { createContext, useEffect, useState } from "react";
const ColourContext = createContext();

function ColourProvider({ children }) {
  const [currentColour, setCurrentColour] = useState("purple-div");
  const [isActive, setIsActive] = useState(false);

  return (
    <ColourContext.Provider
      value={{ currentColour, setCurrentColour, isActive, setIsActive }}
    >
      {children}
    </ColourContext.Provider>
  );
}

export { ColourContext, ColourProvider };
