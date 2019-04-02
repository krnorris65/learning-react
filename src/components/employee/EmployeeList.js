import React, { Component } from 'react'
import { Link } from "react-router-dom"


class EmployeeList extends Component {

    render() {
        return (
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
        )
    }
}

export default EmployeeList