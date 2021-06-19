const express = require('express'); 
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');

//Models
const Company = require('./Models/company_model');

//Middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Port
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Backend is listening on ${PORT}`));

//MongoDB
mongoose.connect(process.env.MONGO_CONNECTION,{useNewUrlParser: true, useUnifiedTopology:true}, () => 'Connected to MongoDB');

//REST
app.get('/', (req,res) => {
    res.send('Hello World');
});

app.post('/',(req,res) => {
    const { name, type } = req.body;
    const newCompany = new Company({
        companyName: name, companyType: type
    });

    newCompany.save(err => err ? res.send(err) : res.send('company saved'));
})