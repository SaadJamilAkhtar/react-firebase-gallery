import {useEffect, useState} from "react";
import {db} from "../config/firebaseConfig";
import {collection, getDocs, query, orderBy, onSnapshot} from "firebase/firestore";

const useFirestore = (collection) => {
    const [docs, setDocs] = useState([]);


    useEffect(() => {
        const q = query(collection(db, "cities"), orderBy("createdAt", 'desc'));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            let documents = [];
            querySnapshot.forEach(doc => {
                documents.push({
                    ...doc.data(),
                    id: doc.id
                });
            });
        });
        setDocs(document);

    }, [collection])

    return {docs}
}

export default useFirestore