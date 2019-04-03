import React, { Component } from 'react'
export default class LocationList extends Component {
    render() {
        return (
            <article className="locations">
                {
                    this.props.locations.map(location =>
                        <section key={location.id}>
                            <h4>{location.name}</h4>
                            <h5>{location.address}</h5>
                        </section>)
                }


            </article>
        );
    }
}
