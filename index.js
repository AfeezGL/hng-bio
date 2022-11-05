const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

const bio = {
  slackUsername: 'afeezgl',
  backend: true,
  age: 24,
  bio: "Hi, I'm Afeez and I build amazing stuff on the web by converting ideas from pixels to pixel perfect, scalable web applications.",
};

app.get('/', (req, res) => {
  res.json(bio);
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

server.setTimeout(10000, (socket) => {
  console.log('Timeout.');
  socket.destroy();
});
