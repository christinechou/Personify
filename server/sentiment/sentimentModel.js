var Sentiment = function(db, DataTypes) {
  return db.define('Sentiment', {
    text: { type: DataTypes.STRING, required: true },
    personas: { type: DataTypes.JSON(DataTypes.TEXT) },
    emotion: { type: DataTypes.JSON(DataTypes.TEXT) }
  });

};

module.exports = Sentiment;
