import {
    collection,
    getDocs,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const ACHIEVEMENTS_COLLECTION = "achievements";

export async function getAchievementsData() {
    try {
        const snapshot = await getDocs(
            collection(db, ACHIEVEMENTS_COLLECTION)
        );

        const list = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        list.sort((a, b) => {
            const orderA = typeof a.order === "number" ? a.order : (parseInt(a.order, 10) || 0);
            const orderB = typeof b.order === "number" ? b.order : (parseInt(b.order, 10) || 0);
            return orderA - orderB;
        });

        return list;
    }
    catch (error) {
        console.error("Error loading Achievements:", error);
        return [];
    }
}