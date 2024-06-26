import React, { useContext } from "react";
import { FrameContext } from "./FrameContext";
import AuthModal from "./auth/AuthModal";
import SignUpModal from "./auth/SignUpModal";
import { AuthContext } from "./auth/AuthContext";
import { signOut } from "@firebase/auth";
import { auth } from "./firebase/firebase";
import { Button } from "@chakra-ui/react";
import SaveFunction from "./firestore/SaveChartFunction";
import { ColourContext } from "./ColourShifter/ColourContext";

export function TopNav({ dispatch }) {
  const { setUndone, setReset, zeroArray } = useContext(FrameContext);
  const { user } = useContext(AuthContext);
  const { setIsActive } = useContext(ColourContext);
  const logout = () => {
    signOut(auth);
  };
  function handleReset() {
    setReset(true);
  }

  return (
    <div className="top-bar">
      <div className="saved-copies">
        {/* <Setting2 className="svgexport" /> */}
        <div className="text-42">{user ? String(user.email) : "Settings"}</div>
      </div>

      <div className="frame-3">
        <div className="saved-copies" onClick={() => setUndone(true)}>
          <img
            className="svgexport"
            alt="Svgexport"
            src="dynamic-range-solver/img\svgexport-17-71-1.svg"
          />
          <div className="text-wrapper-5">Undo</div>
        </div>
        <div className="saved-copies">
          <img
            className="svgexport"
            alt="Svgexport"
            src="dynamic-range-solver/img\svgexport-17-71-1-1.svg"
          />
          <div className="text-wrapper-5">Redo</div>
        </div>
        <div className="saved-copies" onClick={handleReset()}>
          <img
            className="svgexport"
            alt="Svgexport"
            src="dynamic-range-solver/img\svgexport-17-72-1.svg"
          />
          <div className="text-wrapper-5">New Hand</div>
        </div>
      </div>
      <div className="frame-4">
        <div className="frame-5">
          {user ? (
            <SaveFunction zeroArray={zeroArray} dispatch={dispatch} />
          ) : (
            ""
          )}

          <img
            className="line"
            alt="Line"
            src="dynamic-range-solver/img/line-1.svg"
          />
          {user ? "" : <AuthModal dispatch={dispatch} />}
          {user ? "" : <SignUpModal dispatch={dispatch} />}
          {!user ? (
            ""
          ) : (
            <div className="saved-copies">
              {/* <Setting2 className="svgexport" /> */}
              <Button onClick={logout}> Logout</Button>
            </div>
          )}
        </div>
        <div className="avatar-5">
          {/* <div className="text-44">OR</div> */}
        </div>
      </div>
    </div>
  );
}
