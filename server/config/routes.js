const path = require('path');
const sentimentRouter = require('../sentiment/router');

module.exports = function (app) {
  app.use('/api/sentiment', sentimentRouter);

};
