const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(`Database connected✅✅`)
  })
  .catch((err) => {
    console.log(`Error connecting to database: ${err.message}`)
  })
