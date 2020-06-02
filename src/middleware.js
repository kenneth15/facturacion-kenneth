var User = require('../model/User')

const middleware=(req, res, next)=>{
 /*console.log('req.ip: ', req.ip);*/
 try{

 var authorization = Buffer.from(req.headers.authorization.split(" ")[1], 'base64').toString();
 console.log(authorization)
 var array = authorization.split(":")
 console.log(array);
 var username =array[0]
 var password =array[1]
 console.log('userame: ', username, 'password: ', password);
 User.find({username: username, password: password}, (error, response) =>{
        if(error)next(error);
        console.log(response);
        if(response.length){
            
        next();
        }else {
            var error = new Error('this user i s not defined!')
           next(error);
            }
 })
}catch(error){

 next(error);
}
} 

module.exports= middleware