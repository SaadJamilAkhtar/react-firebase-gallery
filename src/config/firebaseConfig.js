import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";
import {getFirestore} from "firebase/firestore";
import env from "react-dotenv";

const firebaseConfig = {
    apiKey: env.apiKey,
    authDomain: env.authDomain,
    projectId: env.projectId,
    storageBucket: env.storageBucket,
    messagingSenderId: env.messagingSenderId,
    appId: env.appId
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, env.bucket);
const db = getFirestore(app);

export {storage, db}