import {
  doc,
  getDoc,
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const ABOUT_COLLECTION = "about";
const ABOUT_DOCUMENT = "main";

export async function getAboutData() {
  try {
    const aboutRef = doc(
      db,
      ABOUT_COLLECTION,
      ABOUT_DOCUMENT
    );

    const aboutSnap = await getDoc(aboutRef);

    if (aboutSnap.exists()) {
      return {
        id: aboutSnap.id,
        ...aboutSnap.data(),
      };
    }

    // Fallback: check collection
    const snapshot = await getDocs(collection(db, ABOUT_COLLECTION));
    if (!snapshot.empty) {
      const preferred = snapshot.docs.find(d => d.id === "main") || snapshot.docs[0];
      return {
        id: preferred.id,
        ...preferred.data(),
      };
    }

    console.warn("About document not found.");
    return null;
  } catch (error) {
    console.error("Error loading About :", error);
    return null;
  }
}