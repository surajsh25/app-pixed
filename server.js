global.fetch = require('node-fetch');
const Unsplash = require('unsplash-js').default;
const toJson = require('unsplash-js').toJson;
const express = require('express');
const path = require('path');

const app = express();

require('dotenv').config();

app.use(express.static(path.join(__dirname, 'client/build')));

let apikey = process.env.UNSPLASH_API_KEY;

const unsplash = new Unsplash ({
  accessKey: `${apikey}`,
});

app.get('/api/photos', (req, res) => {
  unsplash.photos.listPhotos(req.query.start ,req.query.count)
    .then(toJson)
    .then(json => res.json(json));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Started server at 5000'));