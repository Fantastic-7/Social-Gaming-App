import React, { Component } from 'react';
import Avatar from './avatar';
import navProfile from '../assets/images/whiteProfileLogo.png';
import { connect } from 'react-redux';
import { signout } from '../redux/actions/authActions';
import PropTypes from 'prop-types';

class Header extends Component {
	signout(e) {
		e.preventDefault();
		const { user, signout } = this.props;
		signout(user);
		window.location.href = '/';
	}
	render() {
		const { user } = this.props;

		return (
			<div className="navBar">
				<h1 className="logo">A BRAINY APP</h1>
				<Avatar src={user ? user.photo : navProfile} />
				<button className="signout" id="signout" onClick={this.signout.bind(this)}>
					SIGN OUT
				</button>
			</div>
		);
	}
}

Header.propTypes = {
	signout: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth, usersReducer }) => {
	return {
		isAuthenticated: auth.isAuthenticated,
		user: auth.user,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		signout: user => dispatch(signout(user)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
