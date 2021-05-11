const Joi = require('joi');

//Signup
const userSignupSchema = Joi.object({
    email: Joi.string()
        .email(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
        .required()
        .messages({  
            'string.email': "L'email est invalide",
            "any.required": "L'email est obligatoire."
    }), 

    password: Joi.string()
        .regex(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/)
        .required()
        .messages({  
            "any.required": "Le mot de passe est obligatoire.",
            "string.regex": 'Le mot de passe doit être composé de 8 caractères minimum, et au moins : une minuscule, une majuscule, un nombre, et un caractère spécial parmi : !@#$%^&* .'
        }),

    name: Joi.string()
        .required()
        .messages({
            "any.required": "Le nom est obligatoire"
        }),

    city: Joi.string()
        .required()
        .messages({  
            'string.base': `[dev-only] La ville doit être de type 'String'.`,
            "any.required": "La ville est obligatoire."
        }),

});

// Login
const userLoginSchema = Joi.object({
    email: Joi.string()
        .email(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
        .required()
        .messages({  
            'string.email': "L'email saisi est invalide",
            "any.required": "L'email est obligatoire."
    }), 

    password: Joi.string()
        .regex(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/)
        .required()
        .messages({  
            "any.required": "Le mot de passe est obligatoire.",
            "string.regex": 'Le mot de passe doit être composé de 8 caractères minimum, et au moins : une minuscule, une majuscule, un nombre, et un caractère spécial parmi : !@#$%^&* .'
        }),
});

module.exports = { userSignupSchema, userLoginSchema };