import './styles/style.css'
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Model from "./components/Model";
import {useState} from "react";

function App() {
    const [img, setImg] = useState(null);
    return (
        <div className="App">
            <Title/>
            <UploadForm/>
            <ImageGrid updateImg={setImg}/>
            {img && <Model url={img} updateImg={setImg}/>}
        </div>
    );
}

export default App;
