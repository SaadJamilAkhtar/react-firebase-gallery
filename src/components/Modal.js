import React from 'react';
import {motion} from "framer-motion";

function Modal(props) {
    return (
        <motion.div
            className={'backdrop'}
            onClick={(e) => {
                if (e.target.classList.contains('backdrop')) {
                    props.updateImg(null);
                }
            }}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
        >
            <motion.img
                src={props.url}
                alt="IMG"
                initial={{y: "-100vh"}}
                animate={{y: "0vh"}}/>
            <div className="center-content">
                <button className="del">Delete</button>
            </div>
        </motion.div>
    );
}

export default Modal;