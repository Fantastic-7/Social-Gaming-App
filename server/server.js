import http from 'http';
import socketIo from 'socket.io';
import app from './app';

const PORT = process.env.PORT || 5000;
const server = http.createServer(app);
const io = socketIo(server);
let connectedUsers = [];
let scores = [];

io.on('connection', socket => {
	console.log('Client connected');
	socket.emit('welcome', 'Welcome to Brainy Game');

	socket.on('join_game', user => {
		console.log('User has joined the game', user);
		const findUser = connectedUsers.find(connectedUser => connectedUser.id === user.id);
		console.log('User exists', findUser);
		if (findUser === undefined) connectedUsers.push(user);
		console.log('Joined users', connectedUsers);
		io.emit('joined_users', connectedUsers);
	});

	socket.on('leave_game', user => {
		console.log('Left user', user);
		connectedUsers = connectedUsers.filter(connectedUser => connectedUser.id !== user.id);
		console.log('Remaining users', connectedUsers);
		io.emit('joined_users', connectedUsers);
	});

	socket.on('done', player => {
		console.log('game over', player);
		scores.push(player);
		console.log(scores);
		io.emit('show_score', scores);
	});

	socket.on('disconnect', () => {
		console.log('Client disconnected');
	});
});

export default server.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
