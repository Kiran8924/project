// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import Transaction from './Transaction';
import Data from './Data';
import './App.css';
function App() {
  return (
    <Router>
      <div className="container">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/transaction">Transaction</Link>
            </li>
            <li>
              <Link to="/data">Data</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/data" element={<Data />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
