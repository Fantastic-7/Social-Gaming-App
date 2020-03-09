import React, { Component } from 'react';
import jwt from 'jsonwebtoken';
import { connect } from 'react-redux';
import Header from './header';
import Sidebar from './Sidebar';
import StartGame from './StartGame';
import { join, successJoin } from '../redux/actions/usersActions';

class MainPage extends Component {
	componentDidMount() {
		const token = localStorage.getItem('token');
		const user = jwt.verify(token, 'ScreteGoesHere');
		const { joinUser } = this.props;
		joinUser(user);
		// joinedSuccess();
	}

	render() {
		return (
			<div className="wrapper">
				<Header />
				<Sidebar />
				<StartGame />
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	joinUser(user) {
		dispatch(join(user));
	},
	joinedSuccess() {
		dispatch(successJoin());
	},
});

export default connect(null, mapDispatchToProps)(MainPage);
