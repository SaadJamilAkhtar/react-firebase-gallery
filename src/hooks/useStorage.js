import {useState, useEffect} from "react";
import {storage} from "../config/firebaseConfig";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage";

const useStorage = (file) => {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        const storageRef = ref(storage, file.name);
        uploadBytes(storageRef, file)
            .then((snap) => {
                let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
                setProgress(percentage);
                getDownloadURL(storageRef).then(url => {setUrl(url);})
            }).catch((err) => {
                setError(err)
            })

    }, [file])
    return {progress, url, error}
}

export default useStorage;
