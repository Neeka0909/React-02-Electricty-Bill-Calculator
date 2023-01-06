// Modules
const express = require('express');
const cors = require('cors');

//configs
const app = express();
const port = 3000;

// Middlewares
app.use(cors());
app.use(express.json());


