const axios = require('axios')


const apiData = async (location) => {
  try {
    const geoURL = `http://maps.googleapis.com/maps/api/geocode/json?address=${location}`
    const geoData = await axios.get(geoURL)
    const lat = geoData.data.results[0].geometry.location.lat
    const lng = geoData.data.results[0].geometry.location.lng
    const weatherURL = `https://api.darksky.net/forecast/56097d4bcd43ac9970f084e2c53b5fca/${lat},${lng}`
    const weatherData = await axios.get(weatherURL)
    return weatherData.data.currently.temperature
  } catch(e) {
    throw new Error('Cannot get weather data')
  }
}

module.exports = {
  apiData
}
