const express = require('express')
const app = express();
const port = 6969;
app.get('/', (req, res, next) => {
  let diff = (new Date(new Date().getFullYear() + 1, 0, 0, 0, 0, 1).getTime() - new Date().getTime());
  const secs = Math.floor(diff / 1000);
  const mins = Math.floor(secs / 60);
  const hours = Math.floor(mins / 60);
  const days = Math.floor(hours / 24);
  res.json({
    'diff': `${days}:${hours % 24}:${mins % 60}:${secs % 60}`
  })
});

app.listen(port)