import React, { Component } from "react"
import ApiManager from "../../modules/APIManager"

export default class OwnerEditForm extends Component {
    //initial state
    state = {
        ownerName: "",
        phone: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingOwner = evt => {
        evt.preventDefault()

        const editedOwner = {
            id: this.props.match.params.ownerId,
            name: this.state.ownerName,
            phone: parseInt(this.state.phone)
        }

        this.props.updateOwner(editedOwner)
            .then(() => this.props.history.push("/owners"))
    }

    componentDidMount() {
        ApiManager.get("owners", this.props.match.params.ownerId)
            .then(owner => {
                this.setState({
                    ownerName: owner.name,
                    phone: owner.phone
                })
            })
    }

    render() {
        return (
            <React.Fragment>
                <form className="employeeForm">
                    <div className="form-group">
                        <label htmlFor="employeeName">Employee name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="employeeName"
                            placeholder="Employee name"
                            value={this.state.employeeName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Assign to location</label>
                        <select
                            name="location"
                            id="locationId"
                            onChange={this.handleFieldChange}
                            value={this.state.locationId}
                        >
                        <option value="">Select a location</option>
                            {this.props.locations.map(l => (
                                <option key={l.id} id={l.id} value={l.id}>
                                {l.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <button
                        type="submit"
                        onClick={this.updateExistingEmployee}
                        className="btn btn-primary"
                    >Submit
                    </button>
                </form>
            </React.Fragment>
        )
    }
}