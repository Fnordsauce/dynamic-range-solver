import React, { useContext } from "react";
import AuthModal from "./auth/AuthModal";
import SignUpModal from "./auth/SignUpModal";
import { ColourContext } from "./ColourShifter/ColourContext";

export function SideNav() {
  const { currentColour } = useContext(ColourContext);
  return (
    <div>
      <div className="group">
        <div className="text-40">23.1%</div>
        <div className="text-41">306/1326</div>
      </div>
      <div className="menu">
        <div className="top">
          <div className="profile">
            <img className="avatar" alt="Avatar" src="img\final_logo.png" />
          </div>
          <div className="list-item">
            <div className="list-manu">
              <div className="content">
                <div className="avatar-2">
                  <div className="avatar grid-four">
                    <img
                      src={
                        currentColour === "purple-div"
                          ? "img/activeGridFour.png"
                          : "img/gridfour.png"
                      }
                    ></img>
                  </div>
                </div>
                <div
                  className="text"
                  style={{ marginLeft: "0px", marginBottom: "-35px" }}
                >
                  Pre-Flop
                </div>
              </div>
            </div>
            <div className="list-manu">
              <div className="content">
                <div className="avatar-2">
                  <div className="avatar grid-four">
                    <img
                      src={
                        currentColour === "orange-div"
                          ? "img/activeGridFour.png"
                          : "img/gridfour.png"
                      }
                    ></img>
                  </div>
                </div>
                <div
                  className="text"
                  style={{ marginLeft: "0px", marginBottom: "-35px" }}
                >
                  Flop{" "}
                </div>
              </div>
            </div>
            <div className="list-manu">
              <div className="content">
                <div className="avatar-2">
                  <div className="avatar grid-four">
                    <img
                      src={
                        currentColour === "pink-div"
                          ? "img/activeGridFour.png"
                          : "img/gridfour.png"
                      }
                    ></img>
                  </div>
                </div>
                <div
                  className="text"
                  style={{ marginLeft: "0px", marginBottom: "-35px" }}
                >
                  Turn{" "}
                </div>
              </div>
            </div>
            <div className="list-manu">
              <div className="content">
                <div className="avatar-2">
                  <div className="avatar grid-four">
                    <img
                      src={
                        currentColour === "green-div"
                          ? "img/activeGridFour.png"
                          : "img/gridfour.png"
                      }
                    ></img>
                  </div>
                </div>
                <div
                  className="text"
                  style={{ marginLeft: "0px", marginBottom: "-35px" }}
                >
                  River
                </div>
              </div>
            </div>
            <div className="list-manu">
              <div className="content">
                {/* <div className="avatar-3">
          {<GridFour01 className="grid-four" color="#7D8DA7" />}
        </div>
        <div className="text-43">Inventory</div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="list-manu">
            <div className="content">
              <div className="avatar-4">
                {/* <GridFour01 className="grid-four" color="#7D8DA7" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
