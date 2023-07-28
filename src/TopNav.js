import React from "react";

export function TopNav() {
  return (
    <div className="top-bar">
      <div className="saved-copies">
        {/* <Setting2 className="svgexport" /> */}
        <div className="text-wrapper-5">Settings</div>
      </div>
      <div className="frame-3">
        <div className="saved-copies">
          <img
            className="svgexport"
            alt="Svgexport"
            src="img/svgexport-17-71-1.svg"
          />
          <div className="text-wrapper-5">Undo</div>
        </div>
        <div className="saved-copies">
          <img
            className="svgexport"
            alt="Svgexport"
            src="img\svgexport-17-71-1-1.svg"
          />
          <div className="text-wrapper-5">Redo</div>
        </div>
        <div className="saved-copies">
          <img
            className="svgexport"
            alt="Svgexport"
            src="img\svgexport-17-72-1.svg"
          />
          <div className="text-wrapper-5">Reset</div>
        </div>
      </div>
      <div className="frame-4">
        <div className="frame-5">
          <div className="frame-6">
            <img
              className="icon-tick-circle"
              alt="Icon tick circle"
              src="img\icon-tick-circle.svg"
            />
            <div className="text-wrapper-6">Save</div>
          </div>
          <img className="line" alt="Line" src="img/line-1.svg" />
        </div>
        <div className="avatar-5">
          {/* <div className="text-44">OR</div> */}
        </div>
      </div>
    </div>
  );
}
