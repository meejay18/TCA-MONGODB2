const express = require('express')
require('./config/database')
const app = express()
app.use(express.json())
const PORT = process.env.PORT

const productRoute = require('./route/productRoute')
app.use(productRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
