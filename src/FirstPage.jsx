import Header from "./components/header";
import Input from "./components/input";
import {useNavigate} from "react-router-dom";

const FirstPage = () => {
    const navigate = useNavigate();
    return (
        <div>
            <Header />
            <main>
                <h2 className="main-title">Ticket Selection</h2>
                <h3>Step 1/3</h3>
                <section className="first-section">
                <div className="first">
                    <p className="title">Techember Fest &quot;25</p>
                    <p>
                    Join us for an unforgettable experience at [Event Name]! Secure
                    your spot now.
                    </p>
                </div>

                <div className="second">
                    <p>📍 [Event Location]</p>
                    <p>March 15, 2025 | 7:00 PM</p>
                </div>

                </section>
                <hr className="line"/>
                {/* <p>Select Ticket Type:</p> */}

                <p className="select-ticket-type">Select Ticket Type:</p>
                <section className="second-section">
                <Input cost="Free" type="REGULAR ACCESS"/>
                <Input cost="$150" type="VIP ACCESS" />
                <Input cost="$150" type="VVIP ACCESS" />
                
                </section>
            <div className="ticket-num-container">
                <label for="ticket-num">Number of Tickets</label>
                <select name="ticket-num" id="ticket-num">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                </select>
            </div>

                <div className="option-btns">
                <button onClick={() => navigate("/second")} className="next-btn">Next</button>
                <button className="cancel-btn">Cancel</button>
                </div>
            </main>
        </div>
    )
}

export default FirstPage;