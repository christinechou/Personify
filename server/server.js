var app = require('express')();
var server = require('http').Server(app);


require('./config/database');
// Invoke middleware function on app to 'use' all the middleware functions
require('./config/middleware')(app);
// Invoke routers function on app to provide access to all routes defined
require('./config/routes')(app);

require('./seed/server-seed.js');

app.listen(process.env.$PORT || 3000, function(err) {
  if (err) {
    console.log('Server could not connect:',err)
  } else {
    console.log(`Listening on port ${process.env.$PORT || 3000}`);
  }
})

module.exports = app;
