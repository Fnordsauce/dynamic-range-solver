import React, { useContext, useEffect, useState } from "react";
import RecentChart from "./RecentChart";
import { AuthContext } from "./auth/AuthContext";
import QueryFunction from "./firestore/QueryFunction";
import { FrameContext } from "./FrameContext";

// Define a loader component (you can use any loader component you prefer)
function Loader() {
  return <div className="loader">Loading...</div>;
}

export function RecentChartsDiv({ dispatch }) {
  const { user } = useContext(AuthContext);
  const { chartDisplay, setChartDisplay } = useContext(FrameContext);

  const [formattedDataArray, setFormattedDataArray] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true); // Track whether data is loading

  const data = QueryFunction();

  useEffect(
    function () {
      data.then((result) => {
        // Create a new array to store the formatted data
        const tempFormattedDataArray = [];

        // Loop through each item in the result array
        for (const item of result) {
          const inputObject = item;
          // Parse the JSON string into a JavaScript object
          const jsonObject = JSON.parse(inputObject);

          // Get the keys (row names) and sort them based on row numbers
          const sortedKeys = Object.keys(jsonObject.nestedArrayObject).sort(
            (a, b) => parseInt(a.slice(3)) - parseInt(b.slice(3))
          );

          // Create a new array with the rows in the correct order
          const orderedRows = sortedKeys.map(
            (key) => jsonObject.nestedArrayObject[key]
          );

          // Add the orderedRows to the temporary array
          tempFormattedDataArray.push(orderedRows);
        }

        // Update the state with the formatted data and mark loading as false
        setFormattedDataArray(tempFormattedDataArray);
        setLoading(false);
      });
    },
    [data]
  );

  return (
    <div className="overlap-wrapper">
      <div className="overlap">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            <div className="text-wrapper-2">Recent charts</div>
            {loading ? (
              // Render the loader while data is loading
              <Loader />
            ) : user ? (
              // Render the charts when data is available and user is logged in
              <>
                {formattedDataArray.map((data, index) => (
                  <RecentChart key={index} data={data} dispatch={dispatch} />
                ))}
              </>
            ) : (
              // Render a message if the user is not logged in
              "Please Log In to View Recent Charts"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
