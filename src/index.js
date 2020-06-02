var User = require('../model/User')

var root = { 
    hello: () => 'Hello world agein!',
    me:() => {
      return {id: 5, name: 'YoniTores'}
    },
    user: () => {return 'any user'},
    setUser:  ({username, password}) => {
      return new Promise((resolve, reject) => {

      const userYTorres = new User({username: username, password: password});
      userYTorres.save().then((response)=>{
        console.log('guarde user!');
        console.log(response);
        resolve('saved u:'+ username + ' *:' + password);
         }).catch((error) => {
          console.error(error);
       })
      })
     
    }
  };
  
  module.exports = root