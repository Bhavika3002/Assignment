const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userRoutes = require('./routes/user-routes');
const adminRoutes = require('./routes/admin-routes');
const HttpError = require('./utils/http-error');

const port = 3000;
app.use(bodyParser.json());

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/admin', adminRoutes);

app.use((req, res, next) => {
    const error = new HttpError('Page not found', 404);
    throw error;
});

app.use((error, req, res, next) => {
    res.status(error.code);
    res.json({ message: error.message || 'Unknown error occured', code: error.code });
});

mongoose.connect('mongodb+srv://Bhavikasoni:bhavika2002@training.crebz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    useUnifiedTopology: true,
    useNewUrlParser: true

}).then(() => {
    app.listen(port, () => {
        console.log('App running')
    });

}).catch(err => {
    console.log(err);
});