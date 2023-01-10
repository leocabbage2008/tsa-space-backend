const express = require('express');
const dayjs = require('dayjs');
const utc = require('dayjs/plugin/utc');
const timezone = require('dayjs/plugin/timezone');
const customParseFormat = require('dayjs/plugin/customParseFormat')
const app = express();
const port = 6969;
app.get('/', (req, res, next) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);
  dayjs.extend(customParseFormat)
  dayjs.tz.setDefault("America/Kentucky/Monticello");
  let diff = dayjs(dayjs(`${dayjs.tz().get('y') + 1}`, 'YYYY').diff(dayjs()), 'x');
  const secs = Math.floor(diff / 1000);
  const mins = Math.floor(secs / 60);
  const hours = Math.floor(mins / 60);
  const days = Math.floor(hours / 24);
  if (secs % 60 < 10) {
    secs = "0" + secs % 60;
  } else secs %= 60;
  res.json({
    'diff': `${days}:${hours % 24}:${mins % 60}:${secs}`,
    'cur': dayjs(),
  })
});

app.listen(port)

module.exports = app;