import React from 'react';

function Model(props) {
    return (
        <div className={'backdrop'} onClick={() => props.updateImg(null)}>
            <img src={props.url} alt="IMG"/>
        </div>
    );
}

export default Model;