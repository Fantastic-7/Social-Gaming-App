import { socket } from '../../utils/socketUtil';
import { viewConnectedUsers } from '../actions/usersActions';
import { setCurrentUser } from '../actions/authActions';
import { showScore } from '../actions/playerActions';
import { updateScoreBoard } from '../actions/questionActions';

const socketMiddleware = ({ dispatch }) => next => action => {
	if (action.type === 'JOIN') {
		dispatch(setCurrentUser(action.payload));
		socket.emit('join_game', action.payload);
		socket.on('joined_users', users => {
			dispatch(viewConnectedUsers(users));
		});
	}

	if (action.type === 'LEAVE') {
		socket.emit('leave_game', action.payload);
		socket.on('joined_users', users => {
			dispatch(viewConnectedUsers(users));
		});
	}

	if (action.type === 'DONE') {
		socket.emit('done', action.payload[0]);
		socket.on('show_score', scores => {
			dispatch(updateScoreBoard());
			dispatch(showScore(scores));
		});
	}

	return next(action);

	// if (typeof action === 'function') {
	//     return next(action);
	//   }

	//   const {
	//     event,
	//     leave,
	//     handle,
	//     ...rest
	//   } = action;

	//   if (!event) {
	//     return next(action);
	//   }

	//   if (leave) {
	//     socket.removeListener(event);
	//   }

	//   let handleEvent = handle;
	//   if (typeof handleEvent === 'string') {
	//     handleEvent = result => dispatch({ type: handle, result, ...rest });
	//   }
	//   return socket.on(event, handleEvent);
	// };
};

export default socketMiddleware;
