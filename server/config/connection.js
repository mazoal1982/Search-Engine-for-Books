const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect('mongodb+srv://aloysmanga:Amazone1982@cluster0.hf8ubwp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    || 'mongodb://127.0.0.1:27017/googlebooks'
     );

module.exports = mongoose.connection;
