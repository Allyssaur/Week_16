//connects to mongodb via mongoose
const mongoose = require('mongoose');

//needs to be async because all mongoose functions are asyncrounous
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }

}

module.exports = connectDB;