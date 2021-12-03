/*!
 * Authentication Validation
 */

'use strict'

/**
 * Module exports
 * @public
 */

const jwt = require('jsonwebtoken')
const config = require('../../config/config.js')
module.exports.validateSignin = validateSignin

/**
 * @function
 * Validate signup request
 */
async function validateSignin(req, res, next) {
    try {
        const authentication = req.session.authentication;
        if((authentication === '') || (typeof authentication === 'undefined')){
            res.redirect('/login');
            return;
        }else{
            console.log({'session':'available'});
            jwt.verify(authentication, config.secret, (err, decoded) => {
                if (err) {
                    console.log(err)
                    
                    return res.redirect('/login');
                }
              req.user =  decoded
              console.log('manager',req.user) 
            next();
            });
        }
    } catch (error) {
        console.log(error)
    }
}
