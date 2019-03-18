import React, { Component } from 'react'
import dog from "./DogIcon.png"
import "./Animal.css"

class AnimalList extends Component {
    render() {
        //array of animalOwners
        let animalOwner = this.props.animalOwners
        //array of owners
        let ownerList = this.props.owners
        return (
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

                        return <div key={animal.id} className="card">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <img src={dog} className="icon--dog" />
                                    {animal.name}
                                    <a href="#"
                                        onClick={() => this.props.deleteAnimal(animal.id)}
                                        className="card-link">Delete</a>
                                </h5>
                                        {ownerArray.map(o => <p key={o.id}>{o.name}</p>)}
                            </div>
                        </div>
                    }
                    )
                }
            </section>
        );
    }
}

export default AnimalList