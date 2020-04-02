import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../components/Routes/Routes';
import MenuOut from '../../components/MenuLoggedOut/MenuOut';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MenuOut />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
