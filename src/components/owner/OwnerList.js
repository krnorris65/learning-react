import React, { Component } from 'react'
import { Link } from "react-router-dom"

export default class OwnerList extends Component {
    render() {
        return (
            <React.Fragment>
                <button 
                    type="button"
                    className="ownerButton"
                    onClick={()=>{
                        this.props.history.push("/owners/new")
                    }}>
                    New Owner
                </button>
                <section className="owners">
                    {
                        this.props.owners.map(owner =>
                            <div key={owner.id}>
                                <h4>{owner.name}</h4>
                                <p>{owner.phone}</p>
                                <Link className="nav-link" to={`/owners/${owner.id}`}>Details</Link>
                                <a href="#"
                                    onClick={() => this.props.removeOwner(owner.id)}>Remove</a>
                            </div>)
                    }
                </section>
            </React.Fragment>
        )
    }
}
