require('dotenv').config()
const bodyParser = require('body-parser');
const express = require('express');
const {connectDB} = require('./config/db');
const authRotes = require('./routes/auth');
const app = express();


//app.use(bodyParser.json())
app.use(express.json());

connectDB();

 app.use('/api',require('./routes/users'));
 app.use('/api', authRotes);

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});