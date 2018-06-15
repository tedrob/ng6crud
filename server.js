const express = require('express'),
      path    = require('path'),
      port    = process.env.Port || 5000,
      pg      = require('pg');

express()
  .use(express.static(path.join(__dirname, 'src')))
  .listen(port, () => {
    console.log(`listening on ${ port}`);
  })
