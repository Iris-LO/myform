require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// Cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

// JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.launch = () => {
    app.listen(port, () => console.log(`app is listening on http://localhost:${port}`));
};

// 404 
app.use(function(req, res, next) {
    next(createError(404));
});

module.exports = app;