import React, { useContext } from "react";
import RecentChart from "./RecentChart";
import { AuthContext } from "./auth/AuthContext";

export function RecentChartsDiv({ dispatch }) {
  const { user } = useContext(AuthContext);
  return (
    <div className="overlap-wrapper">
      <div className="overlap">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="text-wrapper-2">Recent charts</div>
            {user ? <RecentChart /> : "Please Log In to View Recent Charts"}
          </div>
        </div>
      </div>
    </div>
  );
}
