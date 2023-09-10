import { collection, getDocs, getFirestore, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase/firebase";
import RecentChart from "../RecentChart";

async function QueryFunction() {
  let data = [];
  const q = query(collection(db, "ChartDB"));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data.push(JSON.stringify(doc.data()));
  });
  return data;
}

export default QueryFunction;
