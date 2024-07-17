const express = require('express')
const app = express()
const { dbConnection } = require('./config/config')
require('dotenv').config()
const PORT = process.env.PORT || 3001

const swaggerUI = require('swagger-ui-express')
const docs = require('./docs/index')

dbConnection()
app.use(express.json())



app.use('/tasks', require('./routes/tasks.js'))

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(docs))



app.listen(PORT, () => console.log(`Server started at port ${PORT}`))