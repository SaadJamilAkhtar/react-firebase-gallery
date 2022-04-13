import React from 'react';
import {collection, orderBy, query} from "firebase/firestore";
import {db} from "../config/firebaseConfig";
import {useCollectionData} from "react-firebase-hooks/firestore";

function ImageGrid(props) {
    // get data using react-firebase-hooks
    const imagesRef = collection(db, 'images');
    const q = query(imagesRef, orderBy("createdAt", 'desc'));
    const [images] = useCollectionData(q);
    return (
        <div className={'img-grid'}>
            {images && images.map(img => (
                <div className={'img-wrap'} key={img.id}>
                    <img src={img.url} alt="IMG"/>
                </div>
            ))}
        </div>
    );
}

export default ImageGrid;