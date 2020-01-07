const express = require('express');
const connectDB = require('./DB/Connection');
const app = express();
const cors = require('cors')

connectDB();
app.use(express.json({ extended: false }));
app.use('/', require('./Api/Blog'));
app.use(cors());
const Port = process.env.PORT || 3000;

app.listen(Port, () => console.log('Server started on '+ Port ));
