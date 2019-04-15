import React, { Component } from 'react'
import { Link } from "react-router-dom"


export default class SearchResults extends Component {
    render() {

        let animalsFound = false;
        let employeesFound = false;
        let ownersFound = false;
        let locationsFound = false;

        if (this.props.location.state.animals.length > 0) {
            animalsFound = true
        }
        if (this.props.location.state.employees.length > 0) {
            employeesFound = true
        }
        if (this.props.location.state.owners.length > 0) {
            ownersFound = true
        }
        if (this.props.location.state.locations.length > 0) {
            locationsFound = true
        }
        return (
            <div>
                <h1>Search Results</h1>
                {
                    animalsFound ?
                        (
                            <section>
                                <h4>Animals Found:</h4>
                                {
                                    this.props.location.state.animals.map(animal =>
                                        <section key={animal.id} className="card">
                                            <p>{animal.name}</p>
                                            <Link className="nav-link" to={`/animals/${animal.id}`}>Details</Link>
                                        </section>
                                    )
                                }
                            </section>
                        )
                        : null
                }
                {
                    employeesFound ?
                        (
                            <section>
                                <h4>Employees Found:</h4>
                                {
                                    this.props.location.state.employees.map(employee =>
                                        <section key={employee.id} className="card">
                                            <p>{employee.name}</p> <Link className="nav-link" to={`/employees/${employee.id}`}>Details</Link>
                                        </section>
                                    )
                                }
                            </section>
                        )
                        : null
                }
                {
                    ownersFound ?
                        (
                            <section>
                                <h4>Owners Found:</h4>
                                {
                                    this.props.location.state.owners.map(owner =>
                                        <section className="card">
                                            <p>{owner.name}</p> <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                                        </section>
                                    )
                                }
                            </section>
                        )
                        : null
                }
                {
                    locationsFound ?
                        (
                            <section>
                                <h4>Locations Found:</h4>
                                {
                                    this.props.location.state.locations.map(location =>
                                        <section className="card">
                                            <p>{location.name}</p> <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
                                        </section>
                                    )

                                }
                            </section>
                        )
                        : null
                }

            </div>
        )
    }
}
