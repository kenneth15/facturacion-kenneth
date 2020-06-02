const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/facturacion-electronica', {useNewUrlParser: true, useUnifiedTopology: true});

module.exports= mongoose

