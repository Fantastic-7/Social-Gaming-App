import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import Avatar from './avatar';
import navProfile from '../assets/images/whiteProfileLogo.png';
import { connect } from 'react-redux'
import { signout } from '../redux/actions/authActions';
import PropTypes from 'prop-types';

class Header extends Component {
    signout(e) {
        e.preventDefault();
        this.props.signout();
    }
    render() {
        const { isAuthenticated } = this.props;

        return !isAuthenticated ? <Redirect to='/' /> : (
            <div className="navBar">
                <h1 className="logo">A BRAINY APP</h1>
                <Avatar src={navProfile} />
                <button className="signout" id="signout" onClick={this.signout.bind(this)} >SIGN OUT</button>
            </div>
        )
    }
}

Header.propTypes = {
    signout: PropTypes.func.isRequired
}

const mapStateToProps = ({auth}) => {
    return {
        isAuthenticated: auth.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signout: () => dispatch(signout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
