import { useContext } from "react";
import { ColourContext } from "./ColourShifter/ColourContext";

function StartScreen() {
  const { setIsActive } = useContext(ColourContext);
  return (
    <div className="div">
      <div className="start-frame borders" onClick={setIsActive(true)}>
        <a className="text">Start</a>
      </div>
    </div>
  );
}

export default StartScreen;
