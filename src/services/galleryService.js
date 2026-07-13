import {
    collection,
    getDocs,
    orderBy,
    query,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const GALLERY_COLLECTION = "gallery";

export async function getGalleryData() {

    try {

        const galleryQuery = query(

            collection(db, GALLERY_COLLECTION),

            orderBy("order", "asc")

        );

        const gallerySnapshot = await getDocs(

            galleryQuery

        );

        return gallerySnapshot.docs.map((doc) => ({

            id: doc.id,

            ...doc.data(),

        }));

    }

    catch (error) {

        console.error(

            "Error loading Gallery :",

            error

        );

        throw error;

    }

}