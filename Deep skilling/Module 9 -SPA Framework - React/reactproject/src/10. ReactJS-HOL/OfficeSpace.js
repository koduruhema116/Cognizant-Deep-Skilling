import React from "react";
import logo192 from "./logo192.png";
import "./task10.css"

class OfficeSpace extends React.Component {
    render() {
        const offices = [
            {
                Name: "DBS",
                Rent: 50000,
                Address: "Chennai"
            },
            {
                Name: "Regus",
                Rent: 75000,
                Address: "Bangalore"
            },
            {
                Name: "WeWork",
                Rent: 65000,
                Address: "Hyderabad"
            }
        ];

        const element = "Office Space";

        return (
            <div>
                <h1>{element}, at Affordable Range</h1>

                {offices.map((off, idx) => {
                    const color =
                        off.Rent < 60000
                            ? "textRed"
                            : "textBlue";

                    return (
                        <div key={idx}>
                            <img
                                src={logo192}
                                width="25%"
                                height="25%"
                                alt="Office Space"
                            />

                            <h2>Name: {off.Name}</h2>

                            <h3 className={color}>
                                Rent Rs. {off.Rent}
                            </h3>

                            <h3>
                                Address: {off.Address}
                            </h3>

                            <hr />
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default OfficeSpace;