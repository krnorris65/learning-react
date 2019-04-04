import React, { Component } from "react"
import person from "./person.png"

export default class EmployeeDetail extends Component {
    render() {
        const employee = this.props.employees.find(e => e.id === parseInt(this.props.match.params.employeeId)) || {}

        return (
            <section className="employee">
                <div key={employee.id} className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            <img src={person} className="icon--employee" />
                            {employee.name}</h5>
                        <a href="#"
                            onClick={() => this.props.fireEmployee(employee.id)}>Fire</a>
                    </div>
                </div>
            </section>
        )
    }
}
