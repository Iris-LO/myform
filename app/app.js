require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

mongoose.connect('mongodb://localhost:27017/myform')
	.then(() => console.log('Tu es maintemant connectée à MongoDB :)'))
	.catch(() => console.log('Oops ! La connexion a MongoDB a échoué :('));

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

// Router
app.use('/users', require('./routes/user'));

app.launch = () => {
    app.listen(port, () => console.log(`App is listening on localhost:${port}`));
};

module.exports = app;