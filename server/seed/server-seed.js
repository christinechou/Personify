var Sentiment = require('../sentiment/sentimentModel.js');

var results = {
  "document_tone": {
  "tone_categories": [
    {
      "tones": [
        {
          "score": 0.10125,
          "tone_id": "anger",
          "tone_name": "Anger"
        },
        {
          "score": 0.16572,
          "tone_id": "disgust",
          "tone_name": "Disgust"
        },
        {
          "score": 0.11102,
          "tone_id": "fear",
          "tone_name": "Fear"
        },
        {
          "score": 0.611369,
          "tone_id": "joy",
          "tone_name": "Joy"
        },
        {
          "score": 0.215968,
          "tone_id": "sadness",
          "tone_name": "Sadness"
        }
      ],
      "category_id": "emotion_tone",
      "category_name": "Emotion Tone"
    },
    {
      "tones": [
        {
          "score": 0,
          "tone_id": "analytical",
          "tone_name": "Analytical"
        },
        {
          "score": 0,
          "tone_id": "confident",
          "tone_name": "Confident"
        },
        {
          "score": 0,
          "tone_id": "tentative",
          "tone_name": "Tentative"
        }
      ],
      "category_id": "language_tone",
      "category_name": "Language Tone"
    },
    {
      "tones": [
        {
          "score": 0.407,
          "tone_id": "openness_big5",
          "tone_name": "Openness"
        },
        {
          "score": 0.571,
          "tone_id": "conscientiousness_big5",
          "tone_name": "Conscientiousness"
        },
        {
          "score": 0.981,
          "tone_id": "extraversion_big5",
          "tone_name": "Extraversion"
        },
        {
          "score": 0.52,
          "tone_id": "agreeableness_big5",
          "tone_name": "Agreeableness"
        },
        {
          "score": 0.401,
          "tone_id": "emotional_range_big5",
          "tone_name": "Emotional Range"
        }
      ],
      "category_id": "social_tone",
      "category_name": "Social Tone"
    }
  ]}
};

Sentiment.find().exec()
  .then(function(results) {
    if (results.length === 0) {
      Sentiment.create({
        title: 'Trump Speech', 
        emotion: results.document_tone.tone_categories[0].tones,
        language: results.document_tone.tone_categories[1].tones,
        social: results.document_tone.tone_categories[2].tones,
    })
      .then(function() {
        console.log('Survey data created')
      })
    }
  });

