import {
    collection,
    getDocs,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const GALLERY_COLLECTION = "gallery";

export async function getGalleryData() {
    try {
        const snapshot = await getDocs(
            collection(db, GALLERY_COLLECTION)
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
        console.error("Error loading Gallery :", error);
        return [];
    }
}