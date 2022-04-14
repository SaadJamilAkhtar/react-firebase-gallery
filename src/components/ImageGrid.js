import React from 'react';
import {collection, orderBy, query} from "firebase/firestore";
import {db} from "../config/firebaseConfig";
import {useCollectionData} from "react-firebase-hooks/firestore";
import {motion} from "framer-motion";

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
                <motion.div
                    className={'img-wrap'}
                    layoutTransition
                    key={img.url}
                    transition={{delay: 1}}
                    onClick={() => updateImg(img.url)}
                >
                    <motion.img
                        layoutTransition
                        src={img.url} alt="IMG"
                        initial={{
                            opacity: 0
                        }}
                        animate={{opacity: 1}}
                        transition={{delay: 2}}
                    />
                </motion.div>
            ))}
        </div>
    );
}

export default ImageGrid;