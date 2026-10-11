import {
  doc,
  getDoc,
  collection,
  getDocs,
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

    if (heroSnap.exists()) {
      return {
        id: heroSnap.id,
        ...heroSnap.data(),
      };
    }

    // Fallback: try finding first document in hero collection
    const snapshot = await getDocs(collection(db, HERO_COLLECTION));
    if (!snapshot.empty) {
      const preferred = snapshot.docs.find(d => d.id === "main") || snapshot.docs[0];
      return {
        id: preferred.id,
        ...preferred.data(),
      };
    }

    console.warn("Hero document not found.");
    return null;
  } catch (error) {
    console.error("Error loading Hero :", error);
    return null;
  }
}