const axios = require('axios')

module.exports = () => {
  const SWAPI_URL = 'https://swapi.dev/api/people'

  const search = async function(query) {
    const response = await axios.get(`${SWAPI_URL}/?search=${query}`)
    return response
  }

  return {
    search
  }
}