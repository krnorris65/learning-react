import React, { Component } from "react"
import ApiManager from "../../modules/APIManager"

export default class EmployeeEditForm extends Component {
    //initial state
    state = {
        employeeName: "",
        locationId: ""
    }

    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    updateExistingEmployee = evt => {
        evt.preventDefault()

        const editedEmployee = {
            id: this.props.match.params.employeeId,
            name: this.state.employeeName,
            locationId: parseInt(this.state.locationId)
        }

        this.props.updateEmployee(editedEmployee)
            .then(() => this.props.history.push("/employees"))
    }

    componentDidMount() {
        ApiManager.get("employees", this.props.match.params.employeeId)
            .then(employee => {
                this.setState({
                    employeeName: employee.name,
                    locationId: employee.locationId
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