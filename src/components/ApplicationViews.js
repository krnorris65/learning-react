import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'
import APIManager from "../modules/APIManager"
import AnimalDetail from "./animal/AnimalDetail"
import EmployeeDetail from "./employee/EmployeeDetail"
import LocationDetail from "./location/LocationDetail"
import OwnerDetail from "./owner/OwnerDetail"
import AnimalForm from "./animal/AnimalForm"
import EmployeeForm from "./employee/EmployeeForm.js"

export default class ApplicationViews extends Component {


    state = {
        owners: [],
        employees: [],
        locations: [],
        animals: [],
        animalOwners: []
    }

    componentDidMount() {
        const newState = {}

        APIManager.all("owners")
            .then(owners => newState.owners = owners)
            .then(() => APIManager.all("employees")
                .then(employees => newState.employees = employees))
            .then(() => APIManager.all("locations")
                .then(locations => newState.locations = locations))
            .then(() => APIManager.all("animals")
                .then(allAnimals => newState.animals = allAnimals))
            .then(() => APIManager.all("animalOwners")
                .then(animalOwners => newState.animalOwners = animalOwners))
            .then(() => this.setState(newState))
    }

    deleteAnimal = id => {
        return APIManager.delete("animals", id)
            .then(() => APIManager.all("animals")
                .then(animals => this.setState({
                    animals: animals
                })
                )
            )
    }

    addAnimal = newAnimal => {
        return APIManager.post("animals", newAnimal)
            .then(() => APIManager.all("animals"))
            .then(animals =>
                this.setState({
                    animals: animals
                })
            );
    }

    fireEmployee = id => {
        return APIManager.delete("employees", id)
            .then(() => APIManager.all("employees")
                .then(employees => this.setState({
                    employees: employees
                })
                )
            )
    }

    addEmployee = newEmployee => {
        return APIManager.post("employees", newEmployee)
            .then(() => APIManager.all("employees"))
            .then(employees =>
                this.setState({
                    employees: employees
                })
            );
    }

    removeOwner = id => {
        return APIManager.delete("owners", id)
            .then(() => APIManager.all("owners")
                .then(owners => this.setState({
                    owners: owners
                })
                )
            )
            .then(() => APIManager.all("animalOwners")
                .then(animalOwners => {
                    //gets the current animalOwner relationships
                    let ownerAnimals = this.state.animalOwners.filter(oA => oA.ownerId === id)
                    //deletes the animal whose owner was just removed
                    ownerAnimals.map(a => this.deleteAnimal(a.animalId))
                    this.setState({
                        animalOwners: animalOwners

                    })
                }
                ))
    }

    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/locations/:locationId(\d+)" render={(props) => {
                    return <LocationDetail {...props} locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} owners={this.state.owners} animalOwners={this.state.animalOwners} />
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addAnimal={this.addAnimal}
                        employees={this.state.employees}/>
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList {...props} fireEmployee={this.fireEmployee} employees={this.state.employees} />
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props} fireEmployee={this.fireEmployee} employees={this.state.employees} />
                }} />
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                    addEmployee={this.addEmployee} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList removeOwner={this.removeOwner} owners={this.state.owners} />
                }} />
                <Route exact path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail {...props} removeOwner={this.removeOwner} owners={this.state.owners} />
                }} />
            </React.Fragment>
        )
    }
}
