var express = require('express');

var app = express();

require('./config/mongoose');
require('./config/middleware')(app);
require('./config/routes')(app);

require('./seed/server-seed.js');

app.listen(3000, function() {
  console.log('Listening on 3000');
})

module.exports = app;