import React from 'react';
import '../css/Contact.css'; // Zorg ervoor dat je het CSS-bestand importeert

// Import FontAwesomeIcon en de specifieke iconen
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Contact = () => {
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
                        <h1 className='formkleur'>Stuur ons een berichtje!</h1>
                        <input className='formcontact' type="text" id="fname" name="fname" placeholder='Naam' /><br />
                        <input className='formcontact' type="email" id="email" name="email" placeholder='Email' /><br /><br />
                        <input className='formcontact2' type="text" id="bericht" name="bericht" placeholder='Bericht' /><br /><br />
                        <input className='formcontact1' type="submit" value="Verzenden" />
                    </form>
                </div>
                <div className="background-image" />
            </div>
        </div>
    );
};

export default Contact;
