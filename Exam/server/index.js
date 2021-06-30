 const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const PostRoutes = require('./routes/post-routes');
const commentRoutes = require('./routes/comment-routes');

// Configuration statements
const port = 5000;
app.use(bodyParser.json());


app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.setHeader('Access-Contro;-Allow-Headers','Origin,x-Requested-With,Content-type,Accept,Authorization,Role')
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PATCH,PUT,DELETE');
    next();
})

app.use('/data1',PostRoutes);
app.use('/data2',commentRoutes);

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



