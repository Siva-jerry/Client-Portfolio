import {
    doc,
    getDoc,
    collection,
    getDocs,
} from "firebase/firestore";

import { db } from "../firebase/firebase";

const DOCUMENT = doc(
    db,
    "certificates",
    "course"
);

export async function getCertificatesData() {
    try {
        const snapshot = await getDoc(DOCUMENT);

        if (snapshot.exists()) {
            const data = snapshot.data();
            const items = data.items || [];
            return [...items].sort((a, b) => {
                const orderA = typeof a.order === "number" ? a.order : (parseInt(a.order, 10) || 0);
                const orderB = typeof b.order === "number" ? b.order : (parseInt(b.order, 10) || 0);
                return orderA - orderB;
            });
        }

        // Fallback: check if certificates is stored as a collection of docs
        const colSnap = await getDocs(collection(db, "certificates"));
        if (!colSnap.empty) {
            const items = [];
            colSnap.forEach(d => {
                const dData = d.data();
                if (Array.isArray(dData.items)) {
                    items.push(...dData.items);
                } else if (d.id !== "course") {
                    items.push({ id: d.id, ...dData });
                }
            });
            if (items.length > 0) {
                return items.sort((a, b) => (Number(a.order) || 0) - (Number(b.order) || 0));
            }
        }

        return [];
    }
    catch (error) {
        console.error("Error loading certificates:", error);
        return [];
    }
}