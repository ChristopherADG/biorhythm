import React, { Component } from 'react';
import axios from 'axios';
import './Profile.css'
import TitleBar from '../../components/TitleBar/TitleBar';
import UserContext from '../../context/user-context'
import { USER_API_GET } from '../../util/constants'
import ViewProfile from '../../components/Profile/ViewProfile';
import EditProfile from '../../components/Profile/EditProfile';


class Profile extends Component {
    static contextType = UserContext

    state = {
        loggedIn: false,
        editedFirstname: '',
        editedLastname: '',
        editedBirthdate: ''
    }

    componentDidMount() {

        const { state } = this.context

        if (state.user.email === undefined) {
            return
        }

        this.setState({
            editedFirstname: this.context.state.user.name,
            editedLastname: this.context.state.user.lastname,
            editedBirthdate: this.context.state.user.birthdate
        })

    }

    render() {

        const { state } = this.context

        if (state.user.id === undefined) {
            this.props.history.push('/login')
        }

        return (

            <div>

                <div className="container-fluid">
                    <TitleBar title="Profile" />
                    <ViewProfile
                        fname={this.state.editedFirstname}
                        lname={this.state.editedLastname}
                        email={state.user.email}
                        bdate={this.state.editedBirthdate}
                        onEditClicked={this.onEditClicked}
                    />
                    <EditProfile
                        fname={state.user.name}
                        lname={state.user.lastname}
                        bdate={state.user.birthdate}
                        onChangeFirstname={this.changeFirstname}
                        onChangeLastname={this.changeLastname}
                        onChangeBirthdate={this.changeBirthdate}
                        updateUserHandler={this.updateUser}
                        onUpdateClicked={this.onUpdateClicked}
                    />
                </div>
            </div>

        );
    }

    updateUser = (event) => {
        const { state } = this.context

        event.preventDefault();
        if (this.state.editedFirstname === '' || this.state.editedLastname === ''
            || this.state.editedBirthdate === '') {
            alert('No field should be empty')
            return;
        } else {
            axios.put(USER_API_GET + `${state.user.id}/update/`, {
                firstname: this.state.editedFirstname,
                lastname: this.state.editedLastname,
                birthdate: this.state.editedBirthdate
            })
                .then(res => {
                    console.log(res);
                    console.log(res.data);
                    this.onUpdateClicked();
                    this.updateContextUser();
                })
                .catch(err => console.log(err));
        }
    }

    updateContextUser() {
        const { state, setUser } = this.context
        let user = {
            name: this.state.editedFirstname,
            lastname: this.state.editedLastname,
            email: state.user.email,
            id: state.user.id,
            birthdate: this.state.editedBirthdate
        }
        setUser(user);
    }

    changeFirstname = (event) => {
        const target = event.target;
        let _fname = target.value;
        this.setState({
            editedFirstname: _fname
        })
    }

    changeLastname = (event) => {
        const target = event.target;
        let _lname = target.value;
        this.setState({
            editedLastname: _lname
        })
    }

    changeBirthdate = (event) => {
        const target = event.target;
        let _date = target.value;
        this.setState({
            editedBirthdate: _date
        })
    }

    onUpdateClicked() {
        document.getElementById('read-only-profile').style.display = "block"
        document.getElementById('write-only-profile').style.display = "none"
    }

    onEditClicked() {
        document.getElementById('read-only-profile').style.display = "none"
        document.getElementById('write-only-profile').style.display = "block"
    }

}


export default Profile;