import React from 'react';

function Modal(props) {
    return (
        <div className={'backdrop'} onClick={(e) => {
            if (e.target.classList.contains('backdrop')){
                props.updateImg(null);
            }
        }}>
            <img src={props.url} alt="IMG"/>
        </div>
    );
}

export default Modal;