import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import sflogo from '../../assets/images/sflogo.png';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuToggle: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState(prevState => ({
            menuToggle: !prevState.menuToggle
        }));
    }

    render() {
        return (
            <div>
                <nav id="navbar" className="">
                    <div className="nav-wrapper">
                        {/* Navbar Logo */}
                        <div className="logo">
                            {/* Logo Placeholder for Illustration */}
                            <Link to="/home"><i className="fas fa-chess-knight"></i> <img src={sflogo} alt="" /></Link>
                        </div>

                        {/* Navbar Links */}
                        <ul id="menu">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/yourtickets">My Events</Link></li>
                            {/* <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li> */}
                        </ul>
                    </div>
                </nav>

                {/* Menu Icon */}
                <div className="menuIcon" onClick={this.toggleMenu}>
                    <span className="icon icon-bars"></span>
                    <span className="icon icon-bars overlay"></span>
                </div>

                {/* Overlay Menu */}
                {this.state.menuToggle && (
                    <div className="overlay-menu">
                        <ul id="menu">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                )}
            </div>
        );
    }
}

export default Navbar;
