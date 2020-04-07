import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../components/Routes/Routes';
import Menu from '../Menu/Menu';

import { UserProvider } from '../../context/user-context'

class App extends Component {

  render() {
    return (
      <UserProvider>
        <div className="App">
          <BrowserRouter>
            <Menu />
            <Routes />
          </BrowserRouter>
        </div>
      </UserProvider>
    );
  }
}

export default App
