const mongoose = require('mongoose')

export const connectDB = async () => {
    await mongoose.connect("connection String").then(()=>console.log("DB Connected"))
}