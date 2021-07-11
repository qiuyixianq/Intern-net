const express = require('express'); 
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const cors = require('cors');

//!SECURITY NOTE: 
/*
*Bad Practice in real life (for assignment's sake lmao)
Backend username password is saved tgt with user info
althrough i specify it as 'token'.
*/

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
//Route
app.use('/company', require('./routes/company'));
app.use('/login', require('./routes/login'));
app.use('/register', require('./routes/register'));
app.use('/profile', require('./routes/profile'));


//Port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend is listening on ${PORT}`));

//MongoDB
mongoose.connect(process.env.MONGO_CONNECTION,{useNewUrlParser: true, useUnifiedTopology:true}, () => console.log('Connected to MongoDB'));

//REST
app.get('/', (req,res) => {
    res.send(`Backend Server on PORT ${PORT}`);
});