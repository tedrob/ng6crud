const express = require('express'),
      path    = require('path'),
      port    = process.env.Port || 5000,
      pg      = require('pg');

express()
  .use(express.static(path.join(__dirname, './dist/ng6crud/')))
  .use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  })
  .get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '\./dist/ng6crud/index.html'));
  })
  .listen(port, () => {
    console.log(`listening on ${ port}`);

  })
