const express = require('express');
const router = express.Router();

//Controllers
const admin = require('controller/admin');
const view = require('controller/view');
const modules = require('controller/module');
const roles = require('controller/role');
const jobboard = require('controller/jobboard');
const hrController = require('controller/hrController');

const adminMiddleware = require('middleware/adminMiddleware');

//Routes
router.get('/', admin.index);
router.post('/submit-login', admin.submitLoginForm);
router.get('/logout', admin.logout);
router.get('/user/management', adminMiddleware.LoginValidate, admin.userManagement);
router.get('/add/user', adminMiddleware.LoginValidate, admin.addUser);
router.post('/save/user', adminMiddleware.LoginValidate, admin.saveUser);
router.post('/update/user', adminMiddleware.LoginValidate, admin.updateUser);
router.get('/delete/user/:id?', adminMiddleware.LoginValidate, admin.deleteUser);
router.get('/edit/user/:id?', adminMiddleware.LoginValidate, admin.editUser);

//company
router.get('/company/management', adminMiddleware.LoginValidate, admin.companyManagement);
router.post('/search/company', adminMiddleware.LoginValidate, admin.searchManagement);
//module
router.get('/module/management', adminMiddleware.LoginValidate, modules.moduleManagement);
router.get('/add/module/', adminMiddleware.LoginValidate, modules.addModule);
router.post('/save/module/', adminMiddleware.LoginValidate, modules.saveModule);
router.get('/edit/module/:id?', adminMiddleware.LoginValidate, modules.editModule);
router.post('/update/module/', adminMiddleware.LoginValidate, modules.updateModule);
router.get('/delete/module/:id?', adminMiddleware.LoginValidate, modules.deleteModule);
//role
router.get('/role/management', adminMiddleware.LoginValidate, roles.roleManagement);
router.get('/role/permission', adminMiddleware.LoginValidate, roles.rolePermission);
router.get('/add/role', adminMiddleware.LoginValidate, roles.addRole);
router.post('/save/role', adminMiddleware.LoginValidate, roles.saveRole);
//
router.get('/jobboard/management', adminMiddleware.LoginValidate, jobboard.jobboardManagement);
//
router.get('/hr/management', adminMiddleware.LoginValidate, hrController.hrManagement);
router.post('/save/hr/limit', adminMiddleware.LoginValidate, hrController.hrlimit);
//

// router.get('/job/list',adminMiddleware.LoginValidate, admin.index);
module.exports = router;

