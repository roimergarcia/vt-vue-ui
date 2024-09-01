import express from 'express'
import { readJSON, regexClean } from './utils.js'

// import movies from '../movies.json' with {type: 'json'};
// const movies = readJSON('./data/movies.json')
const countries = readJSON('./data/country-by-cities.json')

const PORT = 3500
const app = express()

// app.use(express.static('web'))
app.disable('x-powered-by') // desactiva la cabecera x-powered-by: Express

/**
 * Routes: Movies
 */
// app.get('/movie', async (req, res) => {
//   // const { q } = req.query

//   const movieNames = movies.map((v) => {
//     return v.title
//   })

//   res.json(movieNames)
// })

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://localhost:5173')
  next()
})
/**
 * Routes: countries list. can receive a "q" param with a query string.
 */
app.get('/country', async (req, res) => {
  const { q } = req.query

  let countryNames = countries.map((v) => {
    return v.country
  })

  if (q) {
    const searchTerm = new RegExp(regexClean(q), 'i')
    countryNames = countryNames.filter((v) => {
      return v.search(searchTerm) >= 0
    })
  }

  res.json(countryNames)
})

/**
 * Routes: countries list. can receive a "q" param with a query string.
 */
app.get('/city', async (req, res) => {
  let { q, country } = req.query
  country = country.toLowerCase()

  const chosenCountry = countries.find((v) => v.country.toLowerCase() === country.toLowerCase())
  if (!chosenCountry) return res.json([])

  let cityNames = chosenCountry.cities

  if (q) {
    const searchTerm = new RegExp(regexClean(q), 'i')
    cityNames = cityNames.filter((v) => {
      return v.search(searchTerm) >= 0
    })
  }

  res.json(cityNames)
})

// Run the server
app.listen(PORT, () => {
  console.log(`server listening on port http://localhost:${PORT}`)
})
