import { useContext, useEffect } from "react";
import { FrameContext } from "./FrameContext";
import { Button } from "@chakra-ui/react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase/firebase";

function RecentChart({ data, dispatch, group, index }) {
  const { chartDisplay, setChartDisplay, setChartData, chartData, GroupName } =
    useContext(FrameContext);
  let GroupName1 = `group-${index + 2}`;
  //   updateChartDisplay();
  function handleClick() {
    setChartData(data.data);

    //give data to the combo to check if that cell is there
  }
  async function handleDeleteClick(event) {
    event.stopPropagation(); // Prevent the click event from propagating

    console.log("Chart DELETED ");
    await deleteDoc(doc(db, "ChartDB", `${data.id}`));
  }

  return (
    <>
      <div className={GroupName1} onClick={handleClick}>
        <div className="text-wrapper-3">{data.id}</div>
        <div className="text-wrapper-4">Today, 10am</div>
        <img className="rectangle" alt="Rectangle" src="img\sampleChart.png" />
        <Button
          colorScheme="red" // You can choose any color scheme you like
          size="sm" // Adjust the size as needed (sm for small, md for medium, lg for large)
          onClick={handleDeleteClick}
          style={{ marginLeft: "150px" }} // Adjust the margins as needed
        >
          X
        </Button>
      </div>
    </>
  );
}

export default RecentChart;
