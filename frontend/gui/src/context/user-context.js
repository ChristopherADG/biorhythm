import React, { Component } from 'react'
import axios from 'axios';
import { LOGIN_USER_API_ROUTE, LOGOUT_USER_API_ROUTE, USER_API_GET } from '../util/constants'
import SessionHandler from '../util/sessions'

const UserContext = React.createContext();

class UserProvider extends Component {
    state = {
        user: {}
    }

    async componentDidMount() {
        const id = SessionHandler.getStorageValue();
        if (id) {
            await axios.get(USER_API_GET + id)
                .then(res => {
                    this.setState({
                        user: {
                            name: res.data.firstname,
                            lastname: res.data.lastname,
                            email: res.data.email,
                            id: id,
                            birthdate: res.data.birthdate,
                            picture: res.data.picture
                        }
                    })
                })
                .catch(err => console.log(err));
        }
    }

    login = (email, password) => {
        return axios.post(LOGIN_USER_API_ROUTE, {
            email: email,
            password: password,
        })
            .then(res => {
                if (res.data.success) {
                    this.setState({
                        user: res.data.user
                    })
                    return res.data.user.id
                } else {
                    return false
                }
            })
            .catch(err => {
                console.log(err)
                return false;
            });
    }

    logout = () => {
        axios.get(LOGOUT_USER_API_ROUTE)
            .then(res => {

                this.setState({
                    user: {}
                })
                SessionHandler.clearAuthInStorage()
            })
            .catch(err => console.log(err));
    }

    setUser = (user) => {
        this.setState({
            user: user
        })
    }

    render() {
        return (
            <UserContext.Provider value={{ state: this.state, login: this.login, logout: this.logout, setUser: this.setUser }}>
                {this.props.children}
            </UserContext.Provider>
        )
    }
}

export default UserContext

export { UserProvider }