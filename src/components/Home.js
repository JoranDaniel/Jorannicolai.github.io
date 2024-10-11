import React from 'react';
import '../css/Home.css';



// Import FontAwesomeIcon en de specifieke iconen
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons'; // Voeg faUser toe
import { Link } from 'react-router-dom'; // Importeer Link voor navigatie

const Home = () => {
    return (
        <div className="home">
            <div className="background-image"/>
            <div className="nicolai-fasion"/>
            <div className="tesktcontainer">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet debitis dolorem doloribus ducimus
                    excepturi, id ipsum quibusdam saepe sint, soluta tempore vel. Corporis hic minus quas. Eveniet,
                    ratione, voluptatum.</p>
            </div>

            {/* Navigatiebalk */}
            <nav className="navbar">
                <div className="logo1"></div>
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Kleding">Kleding</Link></li>
                    <li><Link to="/OverOns">Over ons</Link></li>
                    <li><Link to="/Contact">Contact</Link></li>
                </ul>

                {/* Icons toevoegen */}
                <div className="nav-icons">
                    <FontAwesomeIcon
                        icon={faShoppingCart}
                        size="2x"
                        style={{color: "#ffffff"}}
                        className="cart-icon"
                    />
                    {/* Voeg het gebruikerspictogram toe */}
                    <Link to="/Login">
                        <FontAwesomeIcon
                            icon={faUser}
                            size="2x"
                            style={{color: "#ffffff"}}
                            className="user-icon"
                        />
                    </Link>
                </div>
            </nav>

            <footer className="footer">
                <p>KvK: 12345678</p>
                <p>Email: info@example.com</p>
            </footer>

        </div>
    );
};

export default Home;
