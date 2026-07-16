import React from "react";

class Guest extends React.Component{
    render(){
        return (
            <div>
                <h2>Welcome Guest</h2>

                <h3>Flight Details</h3>

                <ul>
                    <li>Flight: AI-202</li>
                    <li>From: Hyderabad</li>
                    <li>To: Delhi</li>
                    <li>Time: 10:00 AM</li>
                </ul>

                <p>Please login to book tickets.</p>
            </div>
        );
    }
}

export default Guest;