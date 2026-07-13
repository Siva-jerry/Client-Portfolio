import {
    doc,
    getDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const DOCUMENT = doc(
    db,
    "certificates",
    "course"
);

/*==================================================
GET CERTIFICATES
==================================================*/

export async function getCertificatesData() {

    try {

        const snapshot = await getDoc(
            DOCUMENT
        );

        if (!snapshot.exists()) {

            return [];

        }

        const data = snapshot.data();

        return (data.items || []).sort(
            (a, b) => a.order - b.order
        );

    }

    catch (error) {

        console.error(
            "Error loading certificates:",
            error
        );

        throw error;

    }

}