import express from 'express'
import { readJSON } from './utils.js'

// import movies from '../movies.json' with {type: 'json'};
const movies = readJSON('./movies.json')

const PORT = 3500
const app = express()

// app.use(express.static('web'))
app.disable('x-powered-by') // desactiva la cabecera x-powered-by: Express

/**
 * Routes
 */
app.get('/movie', async (req, res) => {
  const movieNames = movies.map((v) => {
    return v.title
  })

  // const { genre } = req.query

  res.json(movieNames)
})

// Run the server
app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
