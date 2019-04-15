import React, { Component } from "react"
import { Link, withRouter } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"
import APIManager from "../../modules/APIManager"


class NavBar extends Component {

    handleSearch(e) {
        let searchTerm = e.currentTarget.value
        if (e.charCode === 13 && searchTerm !== "") {
            const searchResults = {}

            APIManager.search("owners", searchTerm)
                .then(owners => searchResults.owners = owners)
                .then(() => APIManager.search("employees", searchTerm)
                    .then(employees => searchResults.employees = employees))
                .then(() => APIManager.search("locations", searchTerm)
                    .then(locations => searchResults.locations = locations))
                .then(() => APIManager.search("animals", searchTerm)
                    .then(allAnimals => searchResults.animals = allAnimals))
                .then(() => this.props.history.push({
                    pathname: "/search",
                    state: searchResults
                }))

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