import {
    collection,
    getDocs,
    orderBy,
    query,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const TESTIMONIALS_COLLECTION = "testimonials";

export async function getTestimonialsData() {

    try {

        const testimonialsQuery = query(

            collection(db, TESTIMONIALS_COLLECTION),

            orderBy("order", "asc")

        );

        const testimonialsSnapshot = await getDocs(

            testimonialsQuery

        );

        return testimonialsSnapshot.docs.map((doc) => ({

            id: doc.id,

            ...doc.data(),

        }));

    }

    catch (error) {

        console.error(

            "Error loading Testimonials:",

            error

        );

        throw error;

    }

}