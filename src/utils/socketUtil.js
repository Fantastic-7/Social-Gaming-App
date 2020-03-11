import io from 'socket.io-client';

const socket = io('https://brainygame.herokuapp.com', { transports: ['websocket', 'polling', 'flashsocket'] });
socket.on('connect', () => {
	console.log('Socket connected');
});
socket.on('show_score', scores => {
	console.log('Other players\' score', scores);
});

export { socket };
