import React, { Component } from 'react'

export default class OwnerList extends Component {
    render() {
        return (

            <section className="owners">
                {
                    this.props.owners.map(owner =>
                        <div key={owner.id}>
                        <h4>{owner.name}</h4>
                        </div>)
                }
            </section>
        )
    }
}
