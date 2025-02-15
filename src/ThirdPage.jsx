import React from 'react';
import {useNavigate} from "react-router-dom";
import Header from "./components/header";
import ProgressBar from './components/progressBar';

const ThirdPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <main>
            <div className="ticket_step-container">
                <h2 className="main-title">Ticket Selection</h2>
                <h3>Step 1/3</h3>
                </div>
                <ProgressBar step={3} totalSteps={3} />
            <section className="first-section">
                <h1>Your Ticket is Booked!</h1>
                <p>You can download or check your email for a copy</p>   
            </section>

            <section className="second-section">
                <img src="/ticket-frame.png" alt="Ticket-Frame" />
                
            </section>

            </main>
        </div>
    )
}

export default ThirdPage;