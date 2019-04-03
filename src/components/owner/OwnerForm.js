import React, { Component } from "react"

export default class OwnerForm extends Component {
    state = {
        ownerName: "",
        phone: ""
    };

    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange)
    };

    constructNewOwner = evt => {
        evt.preventDefault();

        const owner = {
            name: this.state.ownerName,
            phone: this.state.phone
        }

        this.props
            .addOwner(owner)
            .then(() => this.props.history.push("/owners"));
    }

    render() {
        return (
            <React.Fragment>
                <form>
                    <div className="form-group">
                        <label htmlFor="ownerName">Owner name</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="ownerName"
                            placeholder="Owner name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={this.handleFieldChange}
                            id="phone"
                            placeholder="Phone Number" />
                    </div>
                    <button
                        type="submit"
                        onClick={this.constructNewOwner}
                        className="btn btn-primary"
                    >Submit</button>
                </form>
            </React.Fragment>
        )
    }
}