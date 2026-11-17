import { getFirestore } from "firebase-admin/firestore";
import { getFirebaseApp } from "./firebase";

export function getDatabase() {
  return getFirestore(getFirebaseApp());
}
