import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const SKILLS_COLLECTION = "skills";

export async function getSkillsData() {
  try {

    const skillsRef = collection(
      db,
      SKILLS_COLLECTION
    );

    const skillsQuery = query(
      skillsRef,
      orderBy("order", "asc")
    );

    const snapshot = await getDocs(
      skillsQuery
    );

    const skills = snapshot.docs.map(
      (document) => ({
        id: document.id,
        ...document.data(),
      })
    );

    return skills;

  } catch (error) {

    console.error(
      "Error loading Skills :",
      error
    );

    throw error;

  }
}