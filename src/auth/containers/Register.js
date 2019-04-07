import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Register.css';
import { registerUser } from '../actions';

class Register extends Component {

    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    }

    handleChage = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }


    handleSubmit = (event) => {
        this.props.registerUser(this.state);

        event.preventDefault();
    }

    renderIndicator = ()=> {
        if(this.props.isLoading) {
            return <div>LOADING</div>
        }
        return null;
    }

    renderError = () => {
        if(this.props.hasError) {
            return <div><span>ERROR</span></div>
        }
        return null;
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            {this.renderIndicator()}
            {this.renderError()}
                <div className="container-flex">
                    <input className="register-input" type="email" name="email" placeholder="e-mail" onChange={this.handleChage}></input>
                </div>
                <div className="container-flex">
                    <input className="register-input" type="password" name="password" placeholder="password" onChange={this.handleChage}></input>
                </div>
                <div className="container-flex">
                    <input className="register-input" type="text" name="firstName" placeholder="first name" onChange={this.handleChage}></input>
                </div>
                <div className="container-flex">
                    <input className="register-input" type="text" name="lastName" placeholder="last name" onChange={this.handleChage}></input>
                </div>
                <div className="container-flex">
                    <input className="register-input register-button" type="submit" value="Register me"></input>
                </div>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    registerUser: (data) => dispatch(registerUser(data))
})

const mapStateToProps = state => ({
    isLoading: state.auth.isLoading,
    hasError: state.auth.hasError
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);