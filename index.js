const express = require("express");
const app = express();
const port = 5000;

const bio = {
  slackUsername: "Afeez",
  backend: true,
  age: 24,
  bio: "Hi, I'm Afeez and I build amazing stuff on the web by converting ideas from pixels to pixel perfect, scalable web applications.",
};

app.get("/", (req, res) => {
  res.json(bio);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
