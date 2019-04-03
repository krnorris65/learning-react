import React, { Component } from "react";

export default class EmployeeForm extends Component {
    //initial state
    state = {
        employeeName: ""
    }

    //update state when input field edited
    handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange)
    }

    //create new employee
    constructNewEmployee = evt => {
        evt.preventDefault();

        const employee = {
            name: this.state.employeeName
        }

        this.props.addEmployee(employee)
            .then(() => this.props.history.push("/employees"));


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
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={this.constructNewEmployee}
                        className="btn btn-primary"
                    >
                        Submit
                    </button>
                </form>
            </React.Fragment>
        )
    }
}