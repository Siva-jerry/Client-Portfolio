import {
    collection,
    getDocs,
    doc,
    getDoc,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const FOOTER_COLLECTION = "footer";

export async function getFooterData() {
    try {
        // 1. Try exact document ID used by Admin
        const exactRef = doc(db, FOOTER_COLLECTION, "Footer");
        const exactSnap = await getDoc(exactRef);

        if (exactSnap.exists()) {
            return {
                id: exactSnap.id,
                ...exactSnap.data(),
            };
        }

        // 2. Try 'main'
        const mainRef = doc(db, FOOTER_COLLECTION, "main");
        const mainSnap = await getDoc(mainRef);

        if (mainSnap.exists()) {
            return {
                id: mainSnap.id,
                ...mainSnap.data(),
            };
        }

        // 3. Fallback to collection query
        const snapshot = await getDocs(
            collection(db, FOOTER_COLLECTION)
        );

        if (snapshot.empty) {
            return null;
        }

        const preferredDoc = snapshot.docs.find(d => d.id === "Footer" || d.id === "main") || snapshot.docs[0];

        return {
            id: preferredDoc.id,
            ...preferredDoc.data(),
        };
    }
    catch (error) {
        console.error("Error loading Footer:", error);
        return null;
    }
}