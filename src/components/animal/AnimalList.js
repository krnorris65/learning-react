import React, { Component } from 'react'
// import OwnerList from "../owner/OwnerList"

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
                            let curOwner = ownerList.filter(owner => {
                                if(owner.id === ownerRel.ownerId){
                                    return owner
                                }
                            })
                            // curOwner is an array of one object
                            return curOwner[0]
                        })

                        return <div key={animal.id}>
                            <h1>{animal.name} ({animal.type})</h1>
                            {ownerArray.map(o => <p>{o.name}</p>)}
                        </div>
                    }
                    )
                }
            </section>
        );
    }
}

export default AnimalList