const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, '/build')));
app.use(express.static(path.join(__dirname, '/static')));

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

const port = process.env.PORT || 80;

app.listen({ port }, () => console.log(`🚀 Server ready at http://localhost:${port}`)); // eslint-disable-line no-console
