import express from 'express'
import cors from 'cors'

import api from './api'
import middlewares from './middlewares'


const port = process.env.SERVER_PORT
const app = express()

api(app)
app.use(cors())
middlewares.forEach((middleware) => app.use(middleware))

app.listen(port, () => {
  console.log(`http://localhost:${port}/ is run!`)
})
