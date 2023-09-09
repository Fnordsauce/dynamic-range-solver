import React from "react";
import AuthModal from "./auth/AuthModal";
import SignUpModal from "./auth/SignUpModal";

export function SideNav() {
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
                {/* <div className="grid-four-wrapper">
          { <GridFour01 className="grid-four" color="white" /> }
        </div> */}
                <div className="text-42">Dashboard</div>
              </div>
            </div>
            <div className="list-manu">
              <div className="content">
                {/* <div className="grid-four-01-wrapper">
          <GridFour01 className="grid-four" color="#7D8DA7" />
        </div> */}
                {/* <div className="text-43">Revenue</div>
              </div>
            </div>
            <div className="list-manu">
              <div className="content">
                {/* <div className="style-solid-wrapper">
          { <GridFour01 className="grid-four" color="#7D8DA7" /> }
        </div> */}
                <div className="text-43">Notifications</div>
              </div>
            </div>
            <div className="list-manu">
              <div className="content">
                {/* <div className="avatar-2">
          { <GridFour01 className="grid-four" color="#7D8DA7" /> }
        </div> */}
                <div className="text-43">Analytics</div>
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
