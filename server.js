const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const exerciseRouter = require('./routes/exercise')
const usersRouter = require('./routes/users')

const app = express()

app.use(cors())
app.use(
  cors({
    origin: '*', // restrict calls to those this address
    methods: 'GET, POST, PUt, DELETE, PATCH', // only allow GET requests
    allowedHeaders: '*',
  })
)
require('dotenv').config()

const port = 5555

app.use(express.json())

const uri = process.env.Mongo_Url
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log('connected to database'))
  .catch((err) => console.err('inavlid connection'))

app.use('/exercise', exerciseRouter)
app.use('/users', usersRouter)

app.listen(port, () => {
  console.log(`Listening at port:${port}`)
})
