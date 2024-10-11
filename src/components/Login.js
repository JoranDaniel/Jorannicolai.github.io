import React from 'react';
import '../css/Contact.css'; // Zorg ervoor dat je het CSS-bestand importeert

// Import FontAwesomeIcon en de specifieke iconen
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="contact-page">
            <nav className="navbar">
                <div className="logo"></div>
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
                        style={{ color: "#ffffff" }}
                        className="cart-icon"
                    />
                    <Link to="/Login">
                        <FontAwesomeIcon
                            icon={faUser}
                            size="2x"
                            style={{ color: "#ffffff" }}
                            className="user-icon"
                        />
                    </Link>
                </div>
            </nav>

            <div className="contact-container">
                <div className="form-section">
                    <form action="">
                        <h1 className='formkleur'>Login</h1>
                        <input className='formcontact' type="email" id="fname" name="fname" placeholder='Email'/><br/>
                        <input className='formcontact' type="password" id="email" name="Wachtwoord"
                               placeholder='Wachtwoord'/><br/><br/>
                        <input className='formcontact3' type="submit" value="Login"/>

                        <input className='formcontact3' type="submit" value="Maak een account"/>
                        <p><a href="">Wachtwoord vergeten?</a></p>
                    </form>
                </div>
                <div className="background-image" />
            </div>
        </div>
    );
};

export default Login;
