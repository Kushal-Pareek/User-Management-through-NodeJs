const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./database/connection');

const app = express();
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(userRoutes);

app.listen(3000, () => console.log('Server started on port 3000'));