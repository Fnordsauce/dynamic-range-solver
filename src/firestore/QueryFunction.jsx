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
  const q = query(collection(db, "ChartDB"), where("userID", "==", userUid));

  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // Access the document name (id) and data
      const docData = {
        id: doc.id,
        data: doc.data(),
      };
      data.push(docData);
    });
  } catch (error) {
    // Handle the Firebase error here
    // You can display a popup modal or log the error for debugging
    console.error("Firebase Error:", error);

    // Display a popup modal (you can replace this with your modal logic)
    // Example using window.alert:
    window.alert("Firebase Error: Missing or insufficient permissions");
  }

  return data;
}

export default QueryFunction;
