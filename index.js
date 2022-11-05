const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
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

app.post('/arithmetic-operation/', (req, res) => {
  const allowedOperations = ['addition', 'subtraction', 'multiplication'];

  if (
    !allowedOperations.includes(req.body.operation_type) ||
    isNaN(req.body.x) ||
    isNaN(req.body.y)
  )
    return res.status(404).json({ error: 'Operation not supported.' });

  let result;
  if (req.body.operation_type === 'addition') {
    result = req.body.x + req.body.y;
  } else if (req.body.operation_type === 'subtraction') {
    result = req.body.x - req.body.y;
  } else {
    result = req.body.x * req.body.y;
  }

  res.json({
    slackUsername: bio.slackUsername,
    result,
    operation_type: req.body.operation_type,
  });
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

server.setTimeout(10000, (socket) => {
  socket.destroy();
});
