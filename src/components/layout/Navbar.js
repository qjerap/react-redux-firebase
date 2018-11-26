import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {


    return (
        <nav className="nav-wrapper grey darken-4">
            <div className="container">
                <Link to="/" className="brand-logo">My Plan</Link>
                <SignedInLinks />
                <SignedOutLinks />

            </div>
        </nav>
    );

}


const mapStateToProps = (state) => {
    console.log(state);
    return {
        auth: state.firebase
    }
}


export default connect(mapStateToProps)(Navbar);