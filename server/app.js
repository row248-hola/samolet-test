const express = require('express');
const app = express();
const path = require("path");
const proxy = require('http-proxy-middleware');

app.use(express.static("public"));
app.use('/opendata', proxy({ target: 'https://data.gov.ru/sites/default/files', changeOrigin: true /*, secure: true */ }));

app.listen(3000, () => {
  app.get(/\/(details)?/, (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
  });
});
