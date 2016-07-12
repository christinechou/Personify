var sentimentRouter = require('../sentiment/router');

module.exports = function(app) {
  app.use('/api', sentimentRouter);
};