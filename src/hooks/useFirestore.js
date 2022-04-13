import {useEffect, useState} from "react";
import {db} from "../config/firebaseConfig";
import {collection, getDocs, query, orderBy, onSnapshot} from "firebase/firestore";

const useFirestore = (collectionName) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        let documents = [];
        const q = query(collection(db, collectionName), orderBy("createdAt", 'desc'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            querySnapshot.forEach(doc => {
                documents.push({
                    ...doc.data(),
                    id: doc.id
                });
            });
            setDocs(documents);
        });
        return () => unsubscribe()
    }, [collectionName])

    return {docs}
}

export default useFirestore;