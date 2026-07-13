import {
  doc,
  getDoc,
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

    const aboutSnap = await getDoc(
      aboutRef
    );

    if (!aboutSnap.exists()) {

      console.warn(
        "About document not found."
      );

      return null;

    }

    return {

      id: aboutSnap.id,

      ...aboutSnap.data(),

    };

  } catch (error) {

    console.error(
      "Error loading About :",
      error
    );

    throw error;

  }
}