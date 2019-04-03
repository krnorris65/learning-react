import React, { Component } from 'react'
import { Link } from "react-router-dom"
import "./Owner.css"

export default class OwnerList extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="ownerButton">
                <button 
                    type="button"
                    className="btn btn-success"
                    onClick={()=>{
                        this.props.history.push("/owners/new")
                    }}>
                    New Owner
                </button>
                </div>
                <section className="owners">
                    {
                        this.props.owners.map(owner =>
                            <div key={owner.id} className="card">
                                <h4 className="card-title">{owner.name}</h4>
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
