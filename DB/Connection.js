const mongoose = require('mongoose');

const URI ="mongodb+srv://chris:Shears15Strong!@chrisbriantrlb-7f9vx.mongodb.net/cbblog?retryWrites=true&w=majority"
const connectDB = async () => {
  await mongoose.connect(URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  });
  console.log('db connected..!');
};

module.exports = connectDB;
