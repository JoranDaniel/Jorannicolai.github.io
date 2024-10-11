import React from 'react';
import '../css/Contact.css'; // Zorg ervoor dat je het CSS-bestand importeert

// Import FontAwesomeIcon en de specifieke iconen
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Overons = () => {
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
                    <h1>Het verkopen van tweedehands kleren!</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ducimus eum ipsa quo sit, voluptatem. A ab animi deleniti dolorem excepturi, impedit ipsa iste libero odit, omnis optio quaerat quidem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam corporis debitis dicta in incidunt nam officia optio perspiciatis sapiente soluta? Adipisci illum iste iure labore nesciunt possimus quod unde? Temporibus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aperiam cumque eius illum incidunt, laborum maiores modi nostrum omnis porro similique sint temporibus voluptatum. Cupiditate doloribus maxime mollitia quod recusandae?</p>
                </div>
                <div className="background-image" />
            </div>
        </div>
    );
};

export default Overons;
