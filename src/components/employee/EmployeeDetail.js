import React, { Component } from "react"

export default class EmployeeDetail extends Component {
    render() {
        const employee = this.props.employees.find(e => e.id === parseInt(this.props.match.params.employeeId)) || {}

        return (
            <section className="employee">
                <div key={employee.id}>
                    {employee.name}
                    <a href="#"
                        onClick={() => this.props.fireEmployee(employee.id)}>Fire</a>
                </div>
            </section>
        )
    }
}