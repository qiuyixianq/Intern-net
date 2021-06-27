const express = require('express'); 
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');


//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
//Route
app.use('/company', require('./routes/company'));
app.use('/login', require('./routes/login'));


//Port
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Backend is listening on ${PORT}`));

//MongoDB
mongoose.connect(process.env.MONGO_CONNECTION,{useNewUrlParser: true, useUnifiedTopology:true}, () => 'Connected to MongoDB');

//REST
app.get('/', (req,res) => {
    res.send(`Backend Server on PORT ${PORT}`);
});