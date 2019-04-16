import { Route, Redirect } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animal/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owner/OwnerList'

import AnimalDetail from "./animal/AnimalDetail"
import EmployeeDetail from "./employee/EmployeeDetail"
import OwnerDetail from "./owner/OwnerDetail"

import AnimalForm from "./animal/AnimalForm"
import EmployeeForm from "./employee/EmployeeForm"
import OwnerForm from "./owner/OwnerForm"

import Login from "./authentication/Login"

import AnimalEditForm from "./animal/AnimalEditForm"
import EmployeeEditForm from "./employee/EmployeeEditForm"
import OwnerEditForm from "./owner/OwnerEditForm"

import SearchResults from "./search/SearchResults"

import OwnerManager from '../modules/OwnerManager';
import AnimalManager from "../modules/AnimalManager"
import AnimalOwnerManager from "../modules/AnimalOwnerManager"
import EmployeeManager from "../modules/EmployeeManager"
import LocationManager from "../modules/LocationManager"
export default class ApplicationViews extends Component {

    //check if authenticated
    isAuthenticated = () => sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null

    state = {
        owners: [],
        employees: [],
        locations: [],
        animals: [],
        animalOwners: []
    }

    componentDidMount() {
        const newState = {}

        OwnerManager.all()
            .then(owners => newState.owners = owners)
            .then(() => EmployeeManager.all()
                .then(employees => newState.employees = employees))
            .then(() => LocationManager.all()
                .then(locations => newState.locations = locations))
            .then(() => AnimalManager.all()
                .then(allAnimals => newState.animals = allAnimals))
            .then(() => AnimalOwnerManager.all()
                .then(animalOwners => newState.animalOwners = animalOwners))
            .then(() => this.setState(newState))
    }

    deleteAnimal = id => {
        return AnimalManager.delete(id)
            .then(() => AnimalManager.all()
                .then(animals => this.setState({
                    animals: animals
                })
                )
            )
    }

    updateAnimal = editedAnimal => {
        return AnimalManager.put(editedAnimal)
        .then(() => AnimalManager.all())
        .then(animals => {
            this.setState({
                animals: animals
            })
        })
    }

    addAnimal = newAnimal => {
        return AnimalManager.post(newAnimal)
            .then(() => AnimalManager.all())
            .then(animals =>
                this.setState({
                    animals: animals
                })
            );
    }

    fireEmployee = id => {
        return EmployeeManager.delete(id)
            .then(() => EmployeeManager.all()
                .then(employees => this.setState({
                    employees: employees
                })
                )
            )
    }

    updateEmployee = editedEmployee => {
        return EmployeeManager.put(editedEmployee)
        .then(() => EmployeeManager.all())
        .then(employees => {
            this.setState({
                employees: employees
            })
        })
    }

    addEmployee = newEmployee => {
        return EmployeeManager.post(newEmployee)
            .then(() => EmployeeManager.all())
            .then(employees =>
                this.setState({
                    employees: employees
                })
            );
    }

    removeOwner = id => {
        return OwnerManager.delete(id)
            .then(() => OwnerManager.all()
                .then(owners => this.setState({
                    owners: owners
                })
                )
            )
            .then(() => AnimalOwnerManager.all()
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
    addOwner = newOwner => {
        return OwnerManager.post(newOwner)
            .then(() => OwnerManager.all())
            .then(owners =>
                this.setState({
                    owners: owners
                })
            );
    }
    updateOwner = editedOwner => {
        return OwnerManager.put(editedOwner)
        .then(() => OwnerManager.all())
        .then(owners => {
            this.setState({
                owners: owners
            })
        })
    }
    render() {
        return (
            <React.Fragment>
                <Route path="/login" component={Login}/>
                <Route exact path="/" render={(props) => {
                    if(this.isAuthenticated()){
                        return <LocationList locations={this.state.locations} employees={this.state.employees}/>
                    } else {
                        return <Redirect to="/login"/>
                    }
                }} />
                <Route exact path="/animals" render={(props) => {
                    if(this.isAuthenticated()){
                        return <AnimalList {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} owners={this.state.owners} animalOwners={this.state.animalOwners} />
                    } else {
                        return <Redirect to="/login"/>
                    }
                }} />
                <Route path="/animals/:animalId(\d+)" render={(props) => {
                    return <AnimalDetail {...props} deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route path="/animals/:animalId(\d+)/edit"
                render={props => {
                    return <AnimalEditForm {...props} employees={this.state.employees} updateAnimal={this.updateAnimal}/>
                }}/>
                <Route path="/animals/new" render={(props) => {
                    return <AnimalForm {...props}
                        addAnimal={this.addAnimal}
                        employees={this.state.employees} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    if(this.isAuthenticated()){
                        return <EmployeeList {...props} fireEmployee={this.fireEmployee} employees={this.state.employees} animals={this.state.animals} owners={this.state.owners} animalOwners={this.state.animalOwners}/>
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />
                <Route path="/employees/:employeeId(\d+)" render={(props) => {
                    return <EmployeeDetail {...props} fireEmployee={this.fireEmployee} employees={this.state.employees} />
                }} />
                <Route path="/employees/:employeeId(\d+)/edit" render={props => {
                    return <EmployeeEditForm {...props} locations={this.state.locations} updateEmployee={this.updateEmployee} />
                }} />
                <Route path="/employees/new" render={(props) => {
                    return <EmployeeForm {...props}
                        addEmployee={this.addEmployee} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    if(this.isAuthenticated()){
                        return <OwnerList {...props} removeOwner={this.removeOwner} owners={this.state.owners} />
                    } else {
                        return <Redirect to="/login"/>
                    }
                }} />
                <Route exact path="/owners/:ownerId(\d+)" render={(props) => {
                    return <OwnerDetail {...props} removeOwner={this.removeOwner} owners={this.state.owners} />
                }} />
                <Route path="/owners/:ownerId(\d+)/edit" render={props => {
                    return <OwnerEditForm {...props} owners={this.state.owners} updateOwner={this.updateOwner} />
                }}/>
                <Route path="/owners/new" render={(props) => {
                    return <OwnerForm {...props}
                        addOwner={this.addOwner} />
                }} />
                <Route path="/search" render={(props) => {
                    if(this.isAuthenticated()){
                        return <SearchResults {...props}/>
                    }
                }} />
            </React.Fragment>
        )
    }
}
