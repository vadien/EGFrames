import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import * as firestore from "../config/firestore.js";

export const getAllProducts = async () => {
  const collectionRef = collection(firestore.db, "frames");
  const snapshot = await getDocs(collectionRef);
  const cleanData = snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
  console.log(cleanData);
  return cleanData;
};

export const getProductById = async (id: string) => {
  const docRef = doc(firestore.db, "frames", id);
  const snapshot = await getDoc(docRef);
  if (!snapshot.exists()) {
    throw new Error("Could not find a product with id " + id);
  }
  return { id: snapshot.id, ...snapshot.data() };
};
