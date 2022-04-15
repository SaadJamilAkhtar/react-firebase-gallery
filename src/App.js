import './styles/style.css'
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import {useState} from "react";

function App() {
    const [img, setImg] = useState(null);
    return (
        <div className="App">
            <Title/>
            <UploadForm/>
            <ImageGrid updateImg={setImg}/>
            {img && <Modal img={img} updateImg={setImg}/>}
        </div>
    );
}

export default App;
