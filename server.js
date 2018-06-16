const express = require('express'),
      app     = express(),
      path    = require('path'),
      cors    = require('cors'),
      Port    = process.env.Port || 8080,
      bodyParser  = require('body-parser'),
      pg      = require('pg');

express((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header( 'Access-Control-Allow-Headers',
              'Origin, X-Requested-With, Content-type,'+
              'Accept');
  next;
});
const tt = 'dist/ng6crud/index.html/'
express(() => {
  console.log('testing',`${tt}`);
})
  .use(express.static(path.join(__dirname, 'favicon.ico')))
  .use(bodyParser.urlencoded({
    extended: true
  }))
  .use(bodyParser.json({
    type: 'application/json'
  }))
  .get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/ng6crud/index.html'))
  })
  .use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  })
  .listen(Port, () => {
    console.log(`listening on port ${Port} test ${tt}`);
  })

// module.exports = express;
