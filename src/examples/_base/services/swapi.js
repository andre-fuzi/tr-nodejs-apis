const axios = require('axios')

module.exports = () => {
  const SWAPI_URL = 'https://swapi.dev/api/people'

  const search = async function(query, format = '') {
    const response = await axios.get(`${SWAPI_URL}/?search=${query}&format=${format}`)
    return response
  }

  const getPersonSummary = function (results = []) {
    return results.map(function(item) {
      return {
        name: item.name,
        height: item.height,
      }
    })
  }

  return {
    search,
    getPersonSummary,
  }
}