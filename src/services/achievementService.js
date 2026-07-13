import {
    collection,
    getDocs,
    orderBy,
    query,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const ACHIEVEMENTS_COLLECTION = "achievements";

export async function getAchievementsData() {

    try {

        const achievementsQuery = query(

            collection(db, ACHIEVEMENTS_COLLECTION),

            orderBy("order", "asc")

        );

        const achievementsSnapshot = await getDocs(

            achievementsQuery

        );

        return achievementsSnapshot.docs.map((doc) => ({

            id: doc.id,

            ...doc.data(),

        }));

    }

    catch (error) {

        console.error(

            "Error loading Achievements:",

            error

        );

        throw error;

    }

}