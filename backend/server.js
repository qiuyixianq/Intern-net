const express = require('express'); 
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');



//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//Route
app.use('/company', require('./routes/company'));

//Port
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Backend is listening on ${PORT}`));

//MongoDB
mongoose.connect(process.env.MONGO_CONNECTION,{useNewUrlParser: true, useUnifiedTopology:true}, () => 'Connected to MongoDB');

//REST
app.get('/', (req,res) => {
    res.send('Hello World');
});