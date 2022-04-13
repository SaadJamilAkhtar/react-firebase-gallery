import React from 'react';
import useFirestore from "../hooks/useFirestore";

function ImageGrid(props) {
    const {docs} = useFirestore('images');
    return (
        <div className={'img-grid'}>
            {docs && docs.map(img => (
                <div className={'img-wrap'} key={img.id}>
                    <img src={img.url} alt="IMG"/>
                </div>
            ))}
        </div>
    );
}

export default ImageGrid;