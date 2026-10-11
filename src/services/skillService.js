import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const SKILLS_COLLECTION = "skills";

export async function getSkillsData() {
  try {
    const skillsRef = collection(db, SKILLS_COLLECTION);
    const snapshot = await getDocs(skillsRef);

    const skills = snapshot.docs.map((document) => ({
      id: document.id,
      ...document.data(),
    }));

    // Resilient client-side sort
    skills.sort((a, b) => {
      const orderA = typeof a.order === "number" ? a.order : (parseInt(a.order, 10) || 0);
      const orderB = typeof b.order === "number" ? b.order : (parseInt(b.order, 10) || 0);
      return orderA - orderB;
    });

    return skills;
  } catch (error) {
    console.error("Error loading Skills :", error);
    return [];
  }
}