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
  let groupName;

  useEffect(
    function () {
      data.then((result) => {
        // Create a new array to store the formatted data
        const tempFormattedDataArray = [];

        // Loop through each item in the result array
        for (const item of result) {
          // Extract the ID from the data object
          const id = item.id;

          // Access the nestedArrayObject
          const nestedArrayObject = item.data.nestedArrayObject;

          // Convert the nestedArrayObject into an array of rows
          const rowsArray = [];
          for (let i = 1; i <= 13; i++) {
            const rowKey = "row" + i;
            const row = nestedArrayObject[rowKey];
            rowsArray.push(row);
          }

          // Create an object with the ID as the key and the array of rows as the value
          const formattedItem = {
            id: id,
            data: rowsArray,
          };

          // Push the formatted item into the array
          tempFormattedDataArray.push(formattedItem);
        }

        // Update the state with the formatted data and mark loading as false
        setFormattedDataArray(tempFormattedDataArray);
        setLoading(false);
      });
    },
    [data]
  );

  // Function to update chartDisplay safely
  // const updateChartDisplay = () => {
  //   setChartDisplay((prevDisplay) => (prevDisplay === 6 ? 1 : prevDisplay + 1));
  // };
  return (
    <div className="overlap-wrapper">
      <div className="overlap">
        <div className="overlap-group-wrapper">
          <div className="overlap-group">
            {user ? (
              <div className="text-wrapper-2">Recent charts</div>
            ) : (
              <div className="text-wrapper-2">
                Please Log In to <br></br> View Recent Charts
              </div>
            )}

            {loading ? (
              // Render the loader while data is loading
              <Loader />
            ) : user ? (
              // Render the charts when data is available and user is logged in
              <>
                {formattedDataArray.map((data, index) => (
                  <RecentChart
                    key={index}
                    index={index}
                    data={data}
                    dispatch={dispatch}
                  />
                ))}
              </>
            ) : (
              // Render a message if the user is not logged in
              <></>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
