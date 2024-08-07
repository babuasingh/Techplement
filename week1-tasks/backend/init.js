const URI = 'mongodb+srv://register_user:YHy8J4DP3mF7d5yH@cluster0.wutqena.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const mongoose = require('mongoose')
const init = ()=>{
    mongoose.connect(process.env.MONGO_URI, {
      }).then(() => console.log('MongoDB connected'))
        .catch(err => console.log(err));
}

module.exports = init;
