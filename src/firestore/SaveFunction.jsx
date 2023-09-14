import { doc, serverTimestamp, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useContext } from "react";
import { FrameContext } from "../FrameContext";
import { AuthContext } from "../auth/AuthContext";

function SaveFunction({ zeroArray }) {
  const { setChartDisplay } = useContext(FrameContext);
  const { user } = useContext(AuthContext);

  async function uploadArray() {
    let Uinput;
    let person = prompt("Please enter your name:", "Chart X");
    if (person == null || person === "") {
      Uinput = "User cancelled the prompt.";
    } else {
      Uinput = person;
    }
    // Convert the nested array into an object
    const nestedArrayObject = {};

    zeroArray.forEach((row, index) => {
      nestedArrayObject[`row${index + 1}`] = row;
    });

    const userID = user.uid;

    await setDoc(doc(db, "ChartDB", Uinput), {
      timestamp: serverTimestamp(),
      nestedArrayObject,
      userID,
    });
  }

  return (
    <div className="frame-6" onClick={uploadArray}>
      <img
        className="icon-tick-circle"
        alt="Icon tick circle"
        src="img\icon-tick-circle.svg"
      />
      <div className="text-wrapper-6">Save Chart</div>
    </div>
  );
}

export default SaveFunction;
