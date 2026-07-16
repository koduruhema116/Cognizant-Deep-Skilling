import React from "react";
import EmployeeCard from "./EmployeeCard";

function EmployeesList(props) {
    return (
        <div>
            {props.employees.map((emp) => (
                <EmployeeCard
                    key={emp.id}
                    employee={emp}
                />
            ))}
        </div>
    );
}

export default EmployeesList;