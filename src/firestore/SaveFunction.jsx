import { doc, setDoc, Timestamp } from "firebase/firestore";
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
      nestedArrayObject,
      userID,
    });
  }

  return (
    <div className="text-wrapper-6" onClick={uploadArray}>
      Save
    </div>
  );
}

export default SaveFunction;
