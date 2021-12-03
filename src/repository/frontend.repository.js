/*!
 * Authentication Repository
 */
'use strict'

/**
 * Module dependencies.
 * @private
 */

const {
    User
} = require('../services/user.service')
const inactive_company_list = require('../config/models').inactive_company_list

const Utils = require('../utils/utils')
const config = require('../config/config.js')

const uuidv4 = require('uuid/v4')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')


function FrontendRepository() {}

FrontendRepository.prototype.index = async(req, res) => {
    try {

        var pages = 1;
		if(req.params.id>0){
			pages = req.params.id;
		}

		var page = (pages-1)*15
        var user = req.user
        await User.get({
            id: user.id
        }).then(async user => {
            // console.log('hjhkk',user)
            var data = await inactive_company_list.findAll();
            console.log("klkl",data)
            // res.render('index' ,{"page":pages,results:user,total_count:total_jobs,job_boards:results[2]});

        });

		res.end();
    } catch (err) {
        console.error(err)
        throw err
    }
}
FrontendRepository.prototype.login = async(req, res) => {
    try {
        res.render('login');
        res.end();
    } catch (err) {
        console.error(err)
        throw err
    }
}
FrontendRepository.prototype.tryLogin = async(req, res) => {
    let email = req.body.email
    let password = req.body.password
    try {
        await User.get({
            email: email
        }).then(user => {
            let response = Object.assign({}, user)
            if (Utils.isValid(response)) {
                let passwordIsValid = bcrypt.compareSync(password, user.password)
                if (!passwordIsValid) {
                    res.render('login',{'error':'Please enter a valid email and password'});
                    res.end();
                }

                // user.last_login_date = Utils.getDate()
                // user.save()

                let token = jwt.sign({
                        id: user.id
                    },
                    config.secret, {
                        expiresIn: 86400 // expires in 24 hours
                    }
                )
                req.session.authentication = token;
                user.password = null
                req.user = user
                return res.redirect('/');
            }else{
                res.render('login',{'error':'Please enter a valid email and password'});
                res.end();
            }
            
        })
    } catch (err) {
        console.error(err)
        throw err
    }
}

module.exports = new FrontendRepository()