import React from 'react';
import {useNavigate} from "react-router-dom";
import Header from "./components/header";

const ThirdPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <main>
            <h2 className="main-title">Ticket Selection</h2>
            <h3>Step 1/3</h3>
            <section className="first-section">
                <h1>Your Ticket is Booked!</h1>
                <p>You can download or check your email for a copy</p>   
            </section>

            <section className="second-section">
                <img src="src/assets/ticket-frame.png" alt="Ticket-Frame" />
                
            </section>

            </main>
        </div>
    )
}

export default ThirdPage;