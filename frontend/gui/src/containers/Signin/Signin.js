import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import { LOGIN_USER_API_ROUTE } from '../../util/constants'
import LoginForm from '../../components/Signin/LoginForm';

class Signin extends Component {

    state = {
        email: '',
        password: '',
        redirect: false,
        message: ''
    }

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <LoginForm
                    emailHandler={this.changeEmail}
                    pwordHandler={this.changePassword}
                    submitHandler={this.loginUser}
                    message={this.state.message}
                />
            </div>
        );
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
    }

    changeEmail = (event) => {
        const target = event.target;
        let _email = target.value;
        this.setState({
            email: _email
        })
    }

    changePassword = (event) => {
        const target = event.target;
        let _password = target.value;
        this.setState({
            password: _password
        })
    }

    loginUser = (event) => {
        event.preventDefault();
        if (this.state.email === '' || this.state.password === '') {
            alert('No field should be empty');
            return;
        } else {
            axios.post(LOGIN_USER_API_ROUTE, {
                email: this.state.email,
                password: this.state.password,
            })
                .then(res => {
                    console.log(res.data);
                    this.setState({
                        redirect: res.data.redirect,
                        message: res.data.message
                    });
                })
                .catch(err => console.log(err));
        }
    }

}

export default Signin;