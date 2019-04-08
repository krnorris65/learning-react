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
            phone: this.state.phone
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
                <form className="ownerForm">
                    <div className="form-group">
                        <label htmlFor="ownerName">Owner name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="ownerName"
                            placeholder="Owner name"
                            value={this.state.ownerName}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Owner name</label>
                        <input
                            type="phone"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="phone"
                            placeholder="xxx-xxx-xxxx"
                            value={this.state.phone}
                        />
                    </div>
                   
                    <button
                        type="submit"
                        onClick={this.updateExistingOwner}
                        className="btn btn-primary"
                    >Submit
                    </button>
                </form>
            </React.Fragment>
        )
    }
}