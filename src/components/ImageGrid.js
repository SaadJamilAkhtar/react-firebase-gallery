import React from 'react';
import useFirestore from "../hooks/useFirestore";

function ImageGrid(props) {
    const {docs} = useFirestore('images');
    console.log(docs)
    return (
        <div className={'img-grid'}>

        </div>
    );
}

export default ImageGrid;