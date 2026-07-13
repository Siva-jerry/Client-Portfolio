import {
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const HERO_COLLECTION = "hero";
const HERO_DOCUMENT = "main";

export async function getHeroData() {
  try {
    const heroRef = doc(
      db,
      HERO_COLLECTION,
      HERO_DOCUMENT
    );

    const heroSnap = await getDoc(heroRef);

    if (!heroSnap.exists()) {
      console.warn("Hero document not found.");

      return null;
    }

    return {
      id: heroSnap.id,
      ...heroSnap.data(),
    };
  } catch (error) {
    console.error("Error loading Hero :", error);
    throw error;
  }
}