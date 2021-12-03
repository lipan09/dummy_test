const dotenv = require('dotenv');
dotenv.config();

const cookieParser = require('cookie-parser')
const session = require('express-session')
const bodyParser = require('body-parser')

const express = require('express')

const app = express()

app.set('trust proxy', 1)
app.use(cookieParser())
app.use(
    session({
        secret: 'node_app',
        resave: true,
        saveUninitialized: true
    })
)

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

    
// set the view engine to ejs
app.set('view engine', 'ejs');
var path = require('path');

// Require static assets from public folder
app.use(express.static("public"));

// Set 'views' directory for any views 
// being rendered res.render()
app.set('views', path.join(__dirname, '../views'));

function customHeaders(req, res, next) {
    app.disable('x-powered-by');
    res.setHeader('X-Powered-By', 'Sequelize Node App');
    next();
}

app.use(customHeaders);

const FrontendRoutes = require('./../routes/FrontendRoutes')
// const AdminRoutes = require('./../routes/AdminRoutes')
// const AuthRoutes = require('./../routes/AuthRoutes')

//GROUP APP ROUTES
app.use('/',FrontendRoutes);
// app.use('/admin',AdminRoutes);
// app.use('/api',AuthRoutes);

module.exports = app