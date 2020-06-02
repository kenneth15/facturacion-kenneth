var app = express();

app.use(function (req, res, next){
    console.log('Time', Date.now());
    next();
});


var express = require('express')
var app = express()

function isAuth(req, res, next){
    if(res.user && res.user.isLoggedIn){
        return next()
    }
    res.redirect('/login');
}



app.get('/user/:id', isAuth, function(req, res, next){
    res.send('Hello: ' + res.user.name)
})
