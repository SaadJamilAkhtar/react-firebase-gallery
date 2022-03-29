import React, {useState} from 'react';

function UploadForm(props) {

    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpeg']

    const changeHandler = (e) => {
        let selected = e.target.files[0];
        if(selected && types.includes(selected.type)){
            setError(null);
            setFile(selected);
        } else{
            setFile(null);
            setError("Please select an image png/jpeg file.")
        }

    }

    return (
        <form action="">
            <input type="file" onChange={changeHandler}/>
            <div className="output">
                {error && <div className="error">{error}</div>}
                {!error && file && <div>{file.name}</div>}
            </div>
        </form>
    );
}

export default UploadForm;