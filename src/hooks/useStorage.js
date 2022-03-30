import {useState, useEffect} from "react";
import {storage, db} from "../config/firebaseConfig";
import {ref, uploadBytesResumable, getDownloadURL} from "firebase/storage";
import {collection, addDoc, serverTimestamp, updateDoc, getDocs} from "firebase/firestore";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);
    const [filename, setFilename] = useState(file.name);

    useEffect(() => {
        let name = new Date().toString() + "-" + file.name;
        const storageRef = ref(storage, name);
        setFilename(name);
        uploadBytesResumable(storageRef, file)
            .on('state_changed', (snap) => {
                let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
                setProgress(percentage);
            }, (err) => {
                setError(err)
            }, async () => {
                const url = await getDownloadURL(storageRef);
                try {
                    const docRef = collection(db, "images");
                    const doc = await addDoc(docRef, {
                        url
                    });

                    const updateTimestamp = await updateDoc(doc, {
                        timestamp: serverTimestamp()
                    });

                    console.log("Document written with ID: ", doc.id);
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
                setUrl(url);
            })

    }, [file])
    return {progress, url, error, filename}
}

export default useStorage;
