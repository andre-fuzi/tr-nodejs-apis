const axios = require('axios')
const SWAPI_URL = 'https://swapi.dev/api/people'

class SwapiService {
  async search(query) {
    const response = await axios.get(`${SWAPI_URL}/?search=${query}`)
    return response
  }
}

module.exports = {
  SwapiService
}