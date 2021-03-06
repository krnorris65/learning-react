import React, { Component } from "react"

export default class Login extends Component {
    //initial state
    state = {
        email: "",
        password: "",
        remember: ""
    }

    handleFieldChange = (evt) => {
        const stateToChange = {}
        if(evt.target.id === "remember"){
            stateToChange[evt.target.id] = evt.target.checked
        } else {
            stateToChange[evt.target.id] = evt.target.value
        }
        this.setState(stateToChange)
    }

    handleLogin = (e) => {
        e.preventDefault()
        if (this.state.remember) {
            //if remember marked, store in local storage
            localStorage.setItem(
                "credentials",
                JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            )
        } else {
            //if remember not marked, store in session storage
            sessionStorage.setItem(
                "credentials",
                JSON.stringify({
                    email: this.state.email,
                    password: this.state.password
                })
            )
        }
    }

    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                <label htmlFor="inputEmail">
                    Email Address
                </label>
                <input onChange={this.handleFieldChange} type="email"
                    id="email"
                    placeholder="Email address"
                    required="" autoFocus="" />
                <label htmlFor="inputPassword">
                    Password
                </label>
                <input onChange={this.handleFieldChange} type="password"
                    id="password"
                    placeholder="Password"
                    required="" />
                <label htmlFor="inputRemember">
                    Remember Me
                </label>
                <input onChange={this.handleFieldChange}
                    type="checkbox"
                    id="remember" />
                <br />
                <button type="submit">
                    Sign in
                </button>
            </form>
        )
    }
}