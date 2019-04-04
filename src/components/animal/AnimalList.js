import React, { Component } from 'react'
import dog from "./DogIcon.png"
import "./Animal.css"
import { Link } from "react-router-dom"
import AnimalCard from "./AnimalCard"

class AnimalList extends Component {
    render() {
        //array of animalOwners
        let animalOwner = this.props.animalOwners
        //array of owners
        let ownerList = this.props.owners
        return (
            <React.Fragment>
                <div className="animalButton">
                    <button type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push("/animals/new")
                        }
                        }>
                        Admit Animal
                </button>
                </div>
                <section className="animals">
                    {
                        this.props.animals.map(animal => {
                            //finding animalOwner relationship for current Animal
                            let relationship = animalOwner.filter(animalRel => animalRel.animalId === animal.id)

                            //array of owners for current animal
                            let ownerArray = relationship.map(ownerRel => {
                                //getting name of the owner for the current animalOwner relationship. 
                                let curOwner = ownerList.find(owner => {
                                    if (owner.id === ownerRel.ownerId) {
                                        return owner
                                    }
                                })
                                // an object
                                return curOwner
                            })

                            return <AnimalCard key={animal.id} animal={animal} ownerArray={ownerArray} {...this.props} />

                        }
                        )
                    }
                </section>
            </React.Fragment>
        );
    }
}

export default AnimalList