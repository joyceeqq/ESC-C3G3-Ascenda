import React from 'react';
import './App.css';
import Navbar from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home.js';
import History from './pages/history.js';
import Redeem from './pages/redeem.js';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/redeem' element={<Redeem/>} />
        <Route exact path='/history' element={<History/>} />
      </Routes>
    </Router>
  );
}

export default App;
