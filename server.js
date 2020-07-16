global.fetch = require('node-fetch');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const express = require('express');

require('dotenv').config();

let apikey = process.env.UNSPLASH_API_KEY;

const unsplash = new Unsplash ({
  accessKey: `${apikey}`,
});

const app = express();

app.get('/api/photos', (req, res) => {
  unsplash.photos.listPhotos(req.query.start ,req.query.count)
    .then(toJson)
    .then(json => res.json(json));
});

app.listen(5000, () => console.log('Started server at 5000'));