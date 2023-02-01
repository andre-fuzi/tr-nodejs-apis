const axios = require('axios')

class SwapiService {
  constructor() {}

  SWAPI_URL = 'https://swapi.dev/api/people'

  async search(query, format = '') {
    const response = await axios.get(`${this.SWAPI_URL}/?search=${query}&format=${format}`)
    return response
  }

  getPersonSummary(results = []) {
    return results.map(function(item) {
      return {
        name: item.name,
        height: item.height,
      }
    })
  }
}

module.exports = {
  SwapiService
}