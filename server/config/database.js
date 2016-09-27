var Sequelize = require('sequelize');
var db = new Sequelize('narrative', 'christinechou','', {
  dialect: 'postgres'
});

// Sentiment data models
var Sentiment = require('../sentiment/sentimentModel')(db, Sequelize);

// Connect to database
db.authenticate()
  .then(() => {
    console.log('Connection has been successfully established.');
  }, function (err) {
    console.log('Unable to connect to the database: ',err);
  })

Sentiment.sync();

module.exports = {
  Sentiment: Sentiment,
  db: db
}
