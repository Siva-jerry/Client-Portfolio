import {
    collection,
    getDocs,
    query,
    orderBy,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const EXPERIENCE_COLLECTION = "experience";

export async function getExperienceData() {

    try {

        const experienceQuery = query(

            collection(db, EXPERIENCE_COLLECTION),

            orderBy("order", "asc")

        );

        const experienceSnapshot = await getDocs(

            experienceQuery

        );

        const experience = experienceSnapshot.docs.map(

            (doc) => ({

                id: doc.id,

                ...doc.data(),

            })

        );

        return experience;

    }

    catch (error) {

        console.error(

            "Error loading Experience :",

            error

        );

        throw error;

    }

}