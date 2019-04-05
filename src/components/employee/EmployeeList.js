import React, { Component } from 'react'
import { Link } from "react-router-dom"
import person from "./person.png"
import AnimalCard from "../animal/AnimalCard"
import "./Employee.css"

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
                            <div key={employee.id} className="card">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        <img src={person} className="icon--employee" />{employee.name}</h5>
                                    <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                                    <button
                                        type="button"
                                        className="btn btn-success"
                                        onClick={() => {
                                            this.props.history.push(`/employees/${employee.id}/edit`);
                                        }}
                                    >Edit</button>
                                    <a href="#"
                                        onClick={() => this.props.fireEmployee(employee.id)}>Fire</a>
                                </div>
                                <h6 className="card-subtitle mb-2 text-muted">Caretaker For</h6>
                                <div className="animals--caretaker">
                                    {
                                        this.props.animals
                                            .filter(anml => anml.employeeId === employee.id)
                                            .map(anml => <AnimalCard key={anml.id} animal={anml} {...this.props} />)
                                    }
                                </div>
                            </div>
                        )
                    }
                </section>
            </React.Fragment>
        )
    }
}

export default EmployeeList