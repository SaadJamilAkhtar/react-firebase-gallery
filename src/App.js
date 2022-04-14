import './styles/style.css'
import Title from "./components/Title";
import UploadForm from "./components/UploadForm";
import ImageGrid from "./components/ImageGrid";
import Modal from "./components/Modal";
import {useState} from "react";
import {motion} from "framer-motion";

function App() {
    const [img, setImg] = useState(null);
    return (
        <div className="App">
            <Title/>
            <UploadForm/>
            <motion.div layoutTransition>
                <ImageGrid updateImg={setImg}/>
            </motion.div>

            {img && <Modal url={img} updateImg={setImg}/>}
        </div>
    );
}

export default App;
