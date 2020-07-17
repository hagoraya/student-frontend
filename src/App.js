import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'



//Components
import Navbar from './Navbar/Navbar.js'
import Home from './Home/Home.js'
import Search from './Search/Search.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
      </BrowserRouter>
    </div>
  );
}

export default App;
