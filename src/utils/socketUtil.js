import io from 'socket.io-client';

const socket = io('https://brainygame.herokuapp.com', { transports: ['websocket', 'polling', 'flashsocket'] });
socket.on('connect', () => {
	console.log('Socket connected');
});

export { socket };
