require('dotenv').config();
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

//Signup
exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (error, hash) => {
        if (error) {
          res.status(400).json({ error : error })
        }
        const newUser = new User ({
            email: req.body.email,
            password: hash,
            name: req.body.name, 
            city: req.body.city
      });
      newUser.save()
      .then(() => res.status(201).json({ message: 'Nice ! Un nouvel utilisateur a été créé !' }))
      .catch(error => res.status(400).json({ massage: "Oops ... ! Cet utilisateur existe déjà !" }))
    })
}; 