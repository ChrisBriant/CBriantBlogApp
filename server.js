const express = require('express');
const connectDB = require('./DB/Connection');
const app = express();

connectDB();
app.use(express.json({ extended: false }));
app.use('/', require('./Api/Blog'));
const Port = process.env.PORT || 3000;

app.listen(Port, () => console.log('Server started on '+ Port ));
