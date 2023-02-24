import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import './App.css';
import DogFact from './DogFact';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink to="/" exact activeClassName="active-tab">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dog-fact" activeClassName="active-tab">
                Dog Fact
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/dog-fact" element={<DogFact />} />
          <Route path="/" element={<h1>Welcome to my personal webpage, built with react and mongodb!</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
