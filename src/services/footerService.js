import {
    collection,
    getDocs,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const FOOTER_COLLECTION = "footer";

export async function getFooterData() {

    try {

        const snapshot = await getDocs(

            collection(

                db,

                FOOTER_COLLECTION

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

            "Error loading Footer:",

            error

        );

        throw error;

    }

}