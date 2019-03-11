import React, { Component } from 'react'
import EmployeeList from "./employee/EmployeeList"  // Import EmployeeList component
import LocationList from "./location/LocationList"
import AnimalList from "./animal/AnimalList"
import "./Kennel.css"

class Kennel extends Component {

    /*
        Although you will eventually be pulling your objects
        from your json-server API, for this chapter, we're
        faking it and just creating those arrays in the component
        itself
    */
    employeesFromAPI = [
        { id: 1, name: "Jessica Younker" },
        { id: 2, name: "Jordan Nelson" },
        { id: 3, name: "Zoe LeBlanc" },
        { id: 4, name: "Blaise Roberts" }
    ]

    // This will eventually get pulled from the API
    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Circle Way" },
        { id: 2, name: "Nashville South", address: "10101 Binary Court" }
    ]

    animalsFromAPI = [
        {id: 1, name: "Ada", type: "dog"},
        {id: 2, name: "Fluffy", type: "cat"},
        {id: 3, name: "Raleigh", type: "dog"},
        {id: 4, name: "Outsie", type: "cat"}
    ]
    
    ownersFromAPI = [
        { id: 1, name: "Ryan Tanay" },
        { id: 2, name: "Emma Beaton" },
        { id: 3, name: "Dani Adkins" },
        { id: 4, name: "Adam Oswalt" },
        { id: 5, name: "Fletcher Bangs" },
        { id: 6, name: "Angela Lee" }
    ]
    
    animalOwners = [
        {id: 1, animalId: 1, ownerId: [6]},
        {id: 2, animalId: 2, ownerId: [4]},
        {id: 3, animalId: 3, ownerId: [3, 5]},
        {id: 4, animalId: 4, ownerId: [1, 2]},
    ]
    
    state = {
        owners: this.ownersFromAPI,
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animalsFromAPI
    }

    render() {
        return (
            <article className="kennel">
                <LocationList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals={this.state.animals} owners={this.state.owners}/>
            </article>
        )
    }
}

export default Kennel