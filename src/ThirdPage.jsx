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
                    <h2 className="main-title">Ready</h2>
                    <h3>Step 3/3</h3>
                </div>
                <ProgressBar step={3} totalSteps={3} />

                <div className="heading_para-container">
                <h2>Your Ticket is Booked!</h2>
                <p>You can download or check your email for a copy</p>  
                </div>

                <div className="ticket-frame-container">
                    <div className="ticket-wrapper">
                        <img className="ticket-frame" src="/ticket-frame.png" alt="Ticket-Frame" />

                        <div className="ticket-details">
                            <div className="event-title-date">
                                <h5>Techember Fest "25</h5>
                                <p>📍04 Rumens road, Ikoyi, Lagos</p>
                                <p>📅 March 15, 2025 | 7:00 PM</p>
                            </div>
                            <div className="user-img"></div>
                            <div className="context">
                                <div className="context1">
                                    <div className="context-name context-style">
                                        <p>Enter your name</p>
                                        <p></p>
                                    </div>
                                    <div className="context-email context-style">
                                        <p>Enter your email</p>
                                        <p></p>
                                    </div>
                                </div>
                                <div className="context2">
                                    <div className="context-tic-type context-style">
                                        <p>Ticket Type:</p>
                                        <p></p>
                                    </div>
                                    <div className="context-tic-for context-style">
                                        <p>Ticket for:</p>
                                        <p></p>
                                    </div>
                                </div>
                                <div className="context3">
                                    <p>Special request?</p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                        <div className="barcode">
                            <img src="/barcode.png" alt="barcode" />
                        </div>
                    </div>
                
                </div>

                <div className="option-btns">
                    <button className="next-btn next-desktop">Download Ticket</button>
                    <button onClick={() => navigate("/")} className="cancel-btn" >Book Another Ticket</button>
                </div>                
            </main>
        </div>
    )
}

export default ThirdPage;