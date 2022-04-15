import React, {useEffect} from 'react';
import {motion} from "framer-motion";
import {deleteDoc, doc} from "firebase/firestore";
import {db, storage} from "../config/firebaseConfig";
import {deleteObject, ref} from "firebase/storage";
import {sha256} from "crypto-hash";

function Modal(props) {

    const deleteImg = async (img) => {
        const imgRef = ref(storage, img.name);
        try {
            await deleteDoc(doc(db, "images", await sha256(img.url)));
            await deleteObject(imgRef)
        } catch (e) {
            console.log(e)
        }
        props.updateImg(null);
    }


    return (
        <motion.div
            className={'backdrop'}
            onClick={(e) => {
                if (e.target.classList.contains('backdrop') || e.target.classList.contains('center-content')) {
                    props.updateImg(null);
                }
            }}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <motion.img
                src={props.img.url}
                alt="IMG"
                initial={{y: "-100vh"}}
                animate={{y: "0vh"}}
            />
            <div className="center-content">
                <button className="del" onClick={() => {
                    deleteImg(props.img)
                }}>Delete
                </button>
            </div>
        </motion.div>
    );
}

export default Modal;