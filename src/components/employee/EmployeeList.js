import React, { Component } from 'react'
import { Link } from "react-router-dom"


class EmployeeList extends Component {

    render() {
        return (
            <React.Fragment>
                <div className="employeeButton">
                    <button type="button"
                            className="btn btn-success"
                            onClick={() => {
                                this.props.history.push("/employees/new")
                            }}>New Employee</button>
                </div>
                <section className="employees">
                    {
                        this.props.employees.map(employee =>
                            <div key={employee.id}>
                                {employee.name}
                                <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                                <a href="#"
                                    onClick={() => this.props.fireEmployee(employee.id)}>Fire</a>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default EmployeeList