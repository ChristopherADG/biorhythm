import React, { Component } from 'react';
import axios from 'axios';
import SignupForm from '../../components/Signup/SignupForm'

const CREATE_USER_API_ROUTE = 'http://127.0.0.1:8000/api/users/create/'

class Signup extends Component {

    state = {
        email: '',
        firstname: '',
        lastname: '',
        password: '',
        confPassword: '',
        birthdate: '',
    }

    render() {
        return (
            <div>
                <SignupForm
                    emailHandler={this.changeEmail}
                    fnameHandler={this.changeFirstname}
                    lnameHandler={this.changeLastname}
                    pwordHandler={this.changePassword}
                    confpwordHandler={this.changeConfPassword}
                    bdateHandler={this.changeBirthdate}
                    submitHandler={this.fakeUser}
                />
            </div>
        );
    }

    changeEmail = (event) => {
        console.log("changeEmail called!!")
        const target = event.target;
        let _email = target.value;
        this.setState({
            email: _email
        })
        console.log(_email)
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
                    console.log(res);
                    console.log(res.data);
                    this.setState({
                        email: '',
                        firstname: '',
                        lastname: '',
                        password: '',
                        confPassword: '',
                        birthdate: '',
                    });
                })
                .catch(err => console.log(err));
        }
    }

    fakeUser = (event) => {
        event.preventDefault();
        axios.post(CREATE_USER_API_ROUTE, {
            email: "nuevo@email.com",
            firstname: "Nuevo",
            lastname: "Lastnameee",
            password: "1234",
            birthdate: "01-01-2020"
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }

}

export default Signup;