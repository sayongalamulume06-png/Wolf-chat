const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.send('<h1>Chat de loup en ligne !</h1>');
});

io.on('connection', (socket) => {
  console.log('Un utilisateur est connecté');
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`Serveur actif sur le port ${PORT}`);
});
