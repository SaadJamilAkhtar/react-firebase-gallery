import React, {useEffect} from 'react';
import useStorage from "../hooks/useStorage";

function ProgressBar({file, setFile}) {

    const {url, progress} =useStorage(file);

    useEffect(()=> {
        if(url){
            setFile(null);
        }
    },[url, setFile])

    return (
        <div className="progress-bar" style={{
            width: progress + "%"
        }}>

        </div>
    );
}

export default ProgressBar;