import {
    collection,
    getDocs,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const EXPERIENCE_COLLECTION = "experience";

export async function getExperienceData() {
    try {
        const snapshot = await getDocs(
            collection(db, EXPERIENCE_COLLECTION)
        );

        const experience = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        experience.sort((a, b) => {
            const orderA = typeof a.order === "number" ? a.order : (parseInt(a.order, 10) || 0);
            const orderB = typeof b.order === "number" ? b.order : (parseInt(b.order, 10) || 0);
            return orderA - orderB;
        });

        return experience;
    }
    catch (error) {
        console.error("Error loading Experience :", error);
        return [];
    }
}