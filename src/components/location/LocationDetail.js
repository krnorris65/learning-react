import React, { Component } from "react"


export default class LocationDetail extends Component {
    render() {
        const location = this.props.locations.find(l => l.id === parseInt(this.props.match.params.locationId)) || {}
        return (
            <section className="location">
                <section key={location.id}>
                    <h4>{location.name}</h4>
                    <h5>{location.address}</h5>

                </section>
            </section>
        )
    }
}