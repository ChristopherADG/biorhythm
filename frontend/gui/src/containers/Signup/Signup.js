import React, { Component } from 'react';
import axios from 'axios';
import SignupForm from '../../components/Signup/SignupForm'
import { Redirect } from 'react-router-dom'
import { CREATE_USER_API_ROUTE } from '../../util/constants'

class Signup extends Component {

    state = {
        email: '',
        firstname: '',
        lastname: '',
        password: '',
        confPassword: '',
        birthdate: '',
        redirect: false
    }

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <SignupForm
                    emailHandler={this.changeEmail}
                    fnameHandler={this.changeFirstname}
                    lnameHandler={this.changeLastname}
                    pwordHandler={this.changePassword}
                    confpwordHandler={this.changeConfPassword}
                    bdateHandler={this.changeBirthdate}
                    submitHandler={this.createUser}
                />
            </div>
        );
    }

    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/login' />
        }
    }

    changeEmail = (event) => {
        const target = event.target;
        let _email = target.value;
        this.setState({
            email: _email
        })
    }

    changeFirstname = (event) => {
        const target = event.target;
        let _fname = target.value;
        this.setState({
            firstname: _fname
        })
    }

    changeLastname = (event) => {
        const target = event.target;
        let _lname = target.value;
        this.setState({
            lastname: _lname
        })
    }

    changePassword = (event) => {
        const target = event.target;
        let _password = target.value;
        this.setState({
            password: _password
        })
    }

    changeConfPassword = (event) => {
        const target = event.target;
        let _password = target.value;
        this.setState({
            confPassword: _password
        })
    }

    changeBirthdate = (event) => {
        const target = event.target;
        let _date = target.value;
        this.setState({
            birthdate: _date
        })
    }

    createUser = (event) => {
        event.preventDefault();
        if (this.state.email === '' || this.state.firstname === '' || this.state.lastname === ''
            || this.state.password === '' || this.state.birthdate === '') {
            alert('No field should be empty');
            return;
        } else if (this.state.password !== this.state.confPassword) {
            alert("Passwords doesn't match");
        } else {
            axios.post(CREATE_USER_API_ROUTE, {
                email: this.state.email,
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                password: this.state.password,
                birthdate: this.state.birthdate
            })
                .then(res => {
                    this.setState({
                        email: '',
                        firstname: '',
                        lastname: '',
                        password: '',
                        confPassword: '',
                        birthdate: '',
                        redirect: true
                    });
                })
                .catch(err => console.log(err));
        }
    }

}

export default Signup;