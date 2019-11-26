import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"
import OwnerManager from "../../modules/OwnerManager"
import EmployeeManager from "../../modules/EmployeeManager"
import LocationManager from "../../modules/LocationManager"
import AnimalManager from "../../modules/AnimalManager"


class NavBar extends Component {

    handleSearch(e) {
        let searchTerm = e.currentTarget.value
        if (e.charCode === 13 && searchTerm !== "") {
            console.log("handleSearch")
            const searchResults = {}

            OwnerManager.search(searchTerm)
                .then(owners => searchResults.owners = owners)
                .then(() => EmployeeManager.search(searchTerm)
                    .then(employees => searchResults.employees = employees))
                .then(() => LocationManager.search(searchTerm)
                    .then(locations => searchResults.locations = locations))
                .then(() => AnimalManager.search(searchTerm)
                    .then(allAnimals => searchResults.animals = allAnimals))
                .then(() => {
                    console.log(searchResults)
                    return this.props.history.push({
                        pathname: "/search",
                        state: searchResults
                    })
                }
                )

        }

    }
    render() {
        return (
            <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Locations</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/animals">Animals</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/employees">Employees</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/owners">Owners</Link>
                    </li>
                    <li className="nav-item">
                        <input className="nav-link"
                            placeholder="Search"
                            onKeyPress={this.handleSearch.bind(this)} />
                    </li>
                </ul>
            </nav>
        )
    }
}

export default withRouter(NavBar)