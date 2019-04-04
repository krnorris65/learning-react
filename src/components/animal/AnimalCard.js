import React, { Component } from "react"
import { Link } from "react-router-dom"
import dog from "./DogIcon.png"
import "./Animal.css"

export default class AnimalCard extends Component {
    findOwner(animal) {

        //finding animalOwner relationship for current Animal
        let relationship = this.props.animalOwners.filter(animalRel => animalRel.animalId === animal.id)
        //array of owners for current animal
        let ownerArray = relationship.map(ownerRel => {
            //getting name of the owner for the current animalOwner relationship. 
            let curOwner = this.props.owners.find(owner => {
                if (owner.id === ownerRel.ownerId) {
                    return owner
                }
            })
            // an object
            return curOwner
        })
        return ownerArray
    }
    render() {
        return (
            <React.Fragment>
                {
                    <div key={this.props.animal.id} className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <img src={dog} className="icon--dog" />
                                {this.props.animal.name}
                            </h5>
                            <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>Details</Link>
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => {
                                    this.props.history.push(`/animals/${this.props.animal.id}/edit`);
                                }}
                            >Edit</button>
                            <a href="#"
                                onClick={() => this.props.deleteAnimal(this.props.animal.id)}
                                className="card-link">Delete</a>
                            {this.findOwner(this.props.animal).map(o => <p key={o.id}>{o.name}</p>)}
                        </div>
                    </div>
                }
            </React.Fragment>

        )
    }
}