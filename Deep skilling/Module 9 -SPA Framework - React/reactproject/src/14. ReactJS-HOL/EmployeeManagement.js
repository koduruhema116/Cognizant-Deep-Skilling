import React from "react";
import ThemeContext from "./ThemeContext";
import EmployeesList from "./EmployeesList";

class EmployeeManagement extends React.Component {

    constructor() {
        super();

        this.state = {
            theme: "light",
            employees: [
                {
                    id: 1,
                    name: "Rahul",
                    designation: "Software Engineer"
                },
                {
                    id: 2,
                    name: "Priya",
                    designation: "Full Stack Developer"
                },
                {
                    id: 3,
                    name: "Amit",
                    designation: "UI Developer"
                }
            ]
        };
    }

    render() {
        return (
            <ThemeContext.Provider value={this.state.theme}>
                <div>
                    <h1>Employee Management</h1>

                    <EmployeesList
                        employees={this.state.employees}
                    />
                </div>
            </ThemeContext.Provider>
        );
    }
}

export default EmployeeManagement;