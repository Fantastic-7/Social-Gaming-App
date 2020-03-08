import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadConnectedUsers } from '../redux/actions/usersActions';
import '../assets/scss/sidebar.scss';

class Sidebar extends Component {

	render() {
		const { users } = this.props;
		return (
			<div className="sidebar">
				<div className="online__users">
					<p>
						<strong> PLAYERS</strong> (online)
					</p>
				</div>
				<ul>
					{users.map(({ id, username, photo }) => (
						<li key={id}>
							<span className="Profile">
								<img alt="profile" src={photo} />
							</span>
							{username}
						</li>
					))}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = ({ usersReducer }) => ({ users: usersReducer.users });

const mapDispatchToProps = dispatch => ({
	// connectedUsers() {
	// 	dispatch(viewConnectedUsers());
	// },
	connectedUsers() {
		dispatch(loadConnectedUsers());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
