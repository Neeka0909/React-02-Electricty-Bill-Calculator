// Modules
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//configs
const app = express();
const port = process.env.PORT || 3500
require('dotenv').config();
const uri = process.env.ATLAS_URI;

//routes
const publicRouter = require('./routes/customer.route');
const readerRouter = require('./routes/reader.route');
const billRouter = require('./routes/bill.route');

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/customer', publicRouter);
app.use('/reader', readerRouter);
app.use('/bill', billRouter);

// establish connection to database
mongoose.connect(uri);
mongoose.set('strictQuery', false)
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
