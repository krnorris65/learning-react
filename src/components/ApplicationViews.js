import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'


class ApplicationViews extends Component {
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        { id: 1, name: "Doodles" },
        { id: 2, name: "Jack" },
        { id: 3, name: "Angus" },
        { id: 4, name: "Henley" },
        { id: 5, name: "Derkins" },
        { id: 6, name: "Checkers" }
    ]

    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay", phone: "293-304-3029" },
        { id: 2, name: "Emma Beaton", phone: "283-294-2943" },
        { id: 3, name: "Dani Adkins", phone: "748-398-9483" },
        { id: 4, name: "Adam Oswalt", phone: "829-234-3492" },
        { id: 5, name: "Fletcher Bangs", phone: "283-234-5434" },
        { id: 6, name: "Angela Lee", phone: "984-394-9238" }
    ]
    
    animalOwnersFromAPI = [
        {id: 1, animalId: 1, ownerId: 6},
        {id: 2, animalId: 2, ownerId: 4},
        {id: 3, animalId: 3, ownerId: 3},
        {id: 4, animalId: 3, ownerId: 5},
        {id: 5, animalId: 4, ownerId: 1},
        {id: 6, animalId: 4, ownerId: 2}
    ]
    
    state = {
        owners: this.ownersFromAPI,
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI,
        animalOwners: this.animalOwnersFromAPI
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route path="/animals" render={(props) => {
                    return <AnimalList animals={this.state.animals} owners={this.state.owners} animalOwners={this.state.animalOwners}/>
                }} />
                <Route path="/employees" render={(props) => {
                    return <EmployeeList employees={this.state.employees} />
                }} />
                <Route path="/owners" render={(props) => {
                    return <OwnerList owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}

export default ApplicationViews