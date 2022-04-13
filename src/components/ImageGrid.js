import React from 'react';
import {collection, orderBy, query} from "firebase/firestore";
import {db} from "../config/firebaseConfig";
import {useCollectionData} from "react-firebase-hooks/firestore";

function ImageGrid({updateImg}) {
    // get data using react-firebase-hooks
    const imagesRef = collection(db, 'images');
    const q = query(imagesRef, orderBy("createdAt", 'desc'));
    const [images, loading] = useCollectionData(q);

    if (loading) {
        return (
            <div className={'backdrop'}>
                <div className="loading">
                    <div className="ring"></div>
                </div>

            </div>
        )
    }
    return (
        <div className={'img-grid'}>
            {images && images.map(img => (
                <div className={'img-wrap'} key={img.id}
                     onClick={() => updateImg(img.url)}
                >
                    <img src={img.url} alt="IMG"/>
                </div>
            ))}
        </div>
    );
}

export default ImageGrid;