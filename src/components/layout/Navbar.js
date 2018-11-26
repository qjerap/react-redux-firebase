import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = (props) => {

    const { auth } = props
    const links = auth.isEmpty === true ? <SignedOutLinks /> : <SignedInLinks />

    return (


        <nav className="nav-wrapper grey darken-4">
            <div className="container">
                <Link to="/" className="brand-logo">My Plan</Link>
                { links }
            </div>
        </nav>
    );

}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}


export default connect(mapStateToProps)(Navbar);