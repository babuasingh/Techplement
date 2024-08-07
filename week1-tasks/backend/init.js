const mongoose = require('mongoose')
const init = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
      }).then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err));
}

module.exports = init;
