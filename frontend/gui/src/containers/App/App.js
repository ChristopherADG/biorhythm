import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../components/Routes/Routes';
import Menu from '../Menu/Menu';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
