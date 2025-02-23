const mongoose = require('mongoose');
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI,
{
    useNewUrlParser:true,
    useCreateIndex:true
}

);

mongoose.Promise = global.Promise;
module.exports = mongoose;
