import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import LoginForm from '../../components/Signin/LoginForm';
import SessionHandler from '../../util/sessions'
import UserContext from '../../context/user-context'

class Signin extends Component {
    static contextType = UserContext

    state = {
        email: '',
        password: '',
        redirect: false,
        message: ''
    }

    render() {
        const { state } = this.context

        if (state.user.id !== undefined) {
            this.props.history.push('/dashboard')
        }
        return (
            <LoginForm
                emailHandler={this.changeEmail}
                pwordHandler={this.changePassword}
                submitHandler={this.loginUser}
                message={this.state.message}
            />
        );
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
        const { login } = this.context
        if (this.state.email === '' || this.state.password === '') {
            alert('No field should be empty');
            return;
        } else {
            login(this.state.email, this.state.password).then((id) => {
                if (id) {
                    SessionHandler.setAuthInStorage(id)
                    this.props.history.push('/dashboard')
                } else {
                    this.setState({
                        message: "Invalid email or password"
                    });
                }
            })

        }
    }

}

export default withRouter(Signin);