import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

const Navbar = () => (
    <nav className="nav-wrapper grey darken-4">
        <div className="container">
            <Link to="/" className="brand-logo">My Plan</Link>
            <SignedInLinks />
            <SignedOutLinks />

        </div>
    </nav>
);

export default Navbar;