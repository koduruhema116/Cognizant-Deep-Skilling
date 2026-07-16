import React from "react";

class User extends React.Component{
    render(){
        return (
            <div>
                <h2>Welcome User</h2>

                <h3>Flight Details</h3>

                <ul>
                    <li>Flight: AI-202</li>
                    <li>From: Hyderabad</li>
                    <li>To: Delhi</li>
                    <li>Time: 10:00 AM</li>
                </ul>

                <button>Book Ticket</button>
            </div>
        );
    }
}

export default User;