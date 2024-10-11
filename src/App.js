import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Kleding from './components/Kleding';
import OverOns from './components/OverOns';
import Contact from './components/Contact';
import Login from './components/Login';

const App = () => {
    return (
        <Router>
            <nav>

                    <Link to="/"></Link>
                    <Link to="/kleding"></Link>
                    <Link to="/overons"></Link>
                    <Link to="/contact"></Link>
                <Link to="/Login"></Link>

            </nav>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/kleding" element={<Kleding />} />
                <Route path="/overons" element={<OverOns />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;
