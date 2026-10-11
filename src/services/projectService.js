import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const PROJECTS_COLLECTION = "projects";

export async function getProjectsData() {
  try {
    const projectsRef = collection(db, PROJECTS_COLLECTION);
    const snapshot = await getDocs(projectsRef);

    const projects = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    projects.sort((a, b) => {
      const orderA = typeof a.order === "number" ? a.order : (parseInt(a.order, 10) || 0);
      const orderB = typeof b.order === "number" ? b.order : (parseInt(b.order, 10) || 0);
      return orderA - orderB;
    });

    return projects;
  } catch (error) {
    console.error("Projects Service Error :", error);
    return [];
  }
}