import {
    collection,
    getDocs,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const CONTACT_COLLECTION = "contact";

export async function getContactData() {

    try {

        const snapshot = await getDocs(

            collection(

                db,

                CONTACT_COLLECTION

            )

        );

        if (snapshot.empty) {

            return null;

        }

        return {

            id: snapshot.docs[0].id,

            ...snapshot.docs[0].data(),

        };

    }

    catch (error) {

        console.error(

            "Error loading Contact:",

            error

        );

        throw error;

    }

}