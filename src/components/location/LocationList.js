import React, { Component } from 'react'
import {Link} from "react-router-dom"
export default class LocationList extends Component {
    render() {
        return (
            <article className="locations">
                {
                    this.props.locations.map(location =>
                        <section key={location.id}>
                            <h4>{location.name}</h4>
                            <h5>{location.address}</h5>
                            <Link className="nav-link" to={`/locations/${location.id}`}>Details</Link>
                        </section>)
                }


            </article>
        );
    }
}
