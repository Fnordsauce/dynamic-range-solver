import { useContext } from "react";
import { FrameContext } from "./FrameContext";

function RecentChart({ data, dispatch }) {
  const { chartDisplay, setChartDisplay, setChartData, chartData } =
    useContext(FrameContext);
  const GroupName = `group-${chartDisplay}`;

  // Function to update chartDisplay safely
  const updateChartDisplay = () => {
    setChartDisplay((prevDisplay) => (prevDisplay === 6 ? 1 : prevDisplay + 1));
  };
  //   updateChartDisplay();
  function handleClick() {
    console.log("ye");
    setChartData(data);
    console.log(chartData);

    //give data to the combo to check if that cell is there
  }
  return (
    <>
      <div className={GroupName} onClick={handleClick}>
        <div className="text-wrapper-3">Chart Title</div>
        <div className="text-wrapper-4">Today, 10am</div>
        <img className="rectangle" alt="Rectangle" src="img\sampleChart.png" />
      </div>
    </>
  );
}

export default RecentChart;
