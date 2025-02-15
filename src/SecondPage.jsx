import React from 'react';
import Header from "./components/header";
import Form from "./components/form";
import {useNavigate} from "react-router-dom";

const SecondPage = () => {
    const navigate = useNavigate();
    // const [fileName, setFileName] = useState("");

    const fileChange = (e) => {
        const file = e.target.files[0];
        setFileName(file ? file.name : "")
    }
    return (
        <>
            <Header />
            <main>
            
            
            <Form />

            </main>

        </>
    )
}

export default SecondPage;