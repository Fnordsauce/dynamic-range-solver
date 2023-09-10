import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../firebase/firebase";

function SaveFunction({ zeroArray }) {
  async function uploadArray() {
    // Convert the nested array into an object
    const nestedArrayObject = {};

    zeroArray.forEach((row, index) => {
      nestedArrayObject[`row${index + 1}`] = row;
    });
    await setDoc(doc(db, "ChartDB", "Uinput"), { nestedArrayObject });
    console.log(nestedArrayObject);
  }

  return (
    <div className="text-wrapper-6" onClick={uploadArray}>
      Save
    </div>
  );
}

export default SaveFunction;
