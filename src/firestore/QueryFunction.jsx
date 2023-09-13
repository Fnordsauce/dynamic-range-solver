import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase/firebase";
import RecentChart from "../RecentChart";
import { useContext } from "react";
import { AuthContext } from "../auth/AuthContext";

async function QueryFunction() {
  const { user } = useContext(AuthContext);
  if (!user) return [];

  const userUid = user.uid;

  let data = [];

  // Create a query that filters documents where the "chart" field equals the user's UID
  const q = query(collection(db, "ChartDB"), where("userData", "==", userUid));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    // Access the document name (id) and data
    const docData = {
      id: doc.id,
      data: doc.data(),
    };
    data.push(docData);
  });
  return data;
}

export default QueryFunction;
