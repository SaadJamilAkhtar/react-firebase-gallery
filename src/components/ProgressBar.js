import React from 'react';
import useStorage from "../hooks/useStorage";

function ProgressBar({file, setFile}) {

    const {url, progress} =useStorage(file);

    return (
        <div className="progress-bar">
            {progress}
        </div>
    );
}

export default ProgressBar;