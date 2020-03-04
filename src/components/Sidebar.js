import React, { Component } from 'react';
import { connect } from 'react-redux';
import Avatar from './avatar';
import { viewConnectedUsers } from '../redux/actions/usersActions';

class Sidebar extends Component {
	componentDidMount() {
		console.log(this.props.users);
		const { connectedUsers } = this.props;
		connectedUsers();
	}

	render() {
		const { users } = this.props;
		return (
			<div className="sidebar">
				<h1>Side bar</h1>
				{users.map(({ id, name, profileImg }) => (
					<div key={id}>
						<Avatar src={profileImg} />
						<p>{name}</p>
					</div>
				))}
			</div>
		);
	}
}

const mapStateToProps = state => ({ users: state.usersReducer.users });

const mapDispatchToProps = dispatch => ({
	connectedUsers() {
		dispatch(viewConnectedUsers());
	},
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
