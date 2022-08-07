
import './App.css';
import Ngotam from './component/ngotam';
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Quangquy from './component/HeaderComponet';
import {NavbarBrand, Navbar} from 'reactstrap'



function App() {
  return (
    
    <div className="App">
    
      <header className="App-header">
      
      
    <Ngotam/>
    <Quangquy/>
    
      </header>
      <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
    </div>
  );
}


export default App;
