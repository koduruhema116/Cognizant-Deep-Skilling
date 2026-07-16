import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

function EmployeeCard(props) {

    const theme = useContext(ThemeContext);

    return (
        <div>
            <h3>{props.employee.name}</h3>

            <p>{props.employee.designation}</p>

            <button className={theme}>
                View Details
            </button>

            <hr />
        </div>
    );
}

export default EmployeeCard;