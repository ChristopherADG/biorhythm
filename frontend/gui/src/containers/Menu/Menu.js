import React, { Component } from 'react';
import SessionHandler from '../../util/sessions'
import MenuOut from '../../components/MenuLoggedOut/MenuOut';
import MenuIn from '../../components/MenuLoggedIn/MenuIn';

// EXAMPLE CLASS
// must separate logged in views and MenuIN
// from logged out pages and its MenuOUT

class Menu extends Component {

    state = {
        loggedIn: false
    }

    componentDidMount() {
        if (SessionHandler.isAuthInStorage()) {
            this.setState({
                loggedIn: true
            })
        }
    }

    getMenu() {
        if (SessionHandler.isAuthInStorage()) {
            return <MenuIn switchHandler={this.switchMenu} />
        } else {
            return <MenuOut switchHandler={this.switchMenu} />
        }
    }

    switchMenu() {
        this.setState({
            loggedIn: !this.state.loggedIn
        })
    }

    render() {
        return (
            <div>
                {this.getMenu()}
            </div>
        );
    }

}


export default Menu;