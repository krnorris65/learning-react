import React, { Component } from 'react'
// import OwnerList from "../owner/OwnerList"

class AnimalList extends Component {
    render() {
        return (
            <section className="animals">
                {
                    this.props.animals.map(animal =>

                        <div key={animal.id}>
                            {animal.name} ({animal.type})
                        </div>
                    )
                }
                {
                    this.props.owners.map(owner =>
                        <div key={owner.id}>
                            {owner.name}
                        </div>)
                }
                {
                    this.props.animalOwners.map(animalOwner =>
                        <div key={animalOwner.id}>
                            Animal{animalOwner.animalId}
                            Owner{animalOwner.ownerId}
                        </div>)
                }
            </section>
        );
    }
}

export default AnimalList