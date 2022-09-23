const express = require('express');
const bodyParser = require('body-parser');
const postRoute =  require('./routes/postRoutes');
const userRoute =  require('./routes/userRoutes');
const imageRoute = require('./routes/imageRoutes');
const app = express();

app.use(bodyParser.json());
app.use('/uploads',express.static('uploads'));
app.use('/posts',postRoute)
app.use('/user',userRoute)
app.use('/image',imageRoute);



module.exports = app;