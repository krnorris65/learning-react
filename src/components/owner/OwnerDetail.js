import React, { Component } from "react"

export default class OwnerDetail extends Component {
    render() {
        const owner = this.props.owners.find(o => o.id === parseInt(this.props.match.params.ownerId)) || {}

        return (
            <section className="owner">
                <div key={owner.id}>
                    <h4>{owner.name}</h4>
                    <p>{owner.phone}</p>
                    <a href="#"
                        onClick={() => this.props.removeOwner(owner.id)}>Remove</a>
                </div>
            </section>
        )
    }
}