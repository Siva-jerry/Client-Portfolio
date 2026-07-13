import {
  collection,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

/*
======================================================
GET ALL PROJECTS
======================================================
*/

export async function getProjectsData() {
  try {
    const projectsRef = collection(db, "projects");

    const projectsQuery = query(
      projectsRef,
      orderBy("order", "asc")
    );

    const snapshot = await getDocs(projectsQuery);

    const projects = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return projects;
  } catch (error) {
    console.error("Projects Service Error :", error);
    return [];
  }
}