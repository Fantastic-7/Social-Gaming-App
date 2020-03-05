import http from 'http';
import app from './app';

const PORT = process.env.PORT || 5000;
const server = http.createServer(app)

export default server.listen(PORT, () => { console.log(`Server is running on port ${PORT}`);
});
