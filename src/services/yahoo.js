const moment = require('moment-timezone')
const axios = require('axios')

const { getGreetingTime } = require('../helpers/formatDate')

module.exports.calculateTemperature = (temperature) => {
    try {
        const temp = Math.round((temperature - 38) / 1.8)
        return temp
    } catch (err) {
        throw new Error('Error: calculateTemperature')
    }
}

module.exports.returnSearch = (calculateTemperature) => (result) => {
    try {
        const { condition } = result.data.query.results.channel.item
        const temp  = calculateTemperature(condition.temp)
        const greetingTime = getGreetingTime(moment().tz('America/Recife'))
        if (!condition.text.indexOf('Cloudy')) {
            return `É bom levar um guarda-chuva, talvez chova hoje! \n Temperatura de ${temp} pela ${greetingTime} = )`
        }
        return `Hoje está de boa, temperatura de ${temp}˚, nessa ${greetingTime} linda... : )`
    } catch (err) {
        console.log(err)
        throw new Error('Error: returnSearch function treatment')
    }
}


module.exports.searchWeather = async (returnSearch, calculateTemperature) => {
    try {
        const response = await axios({ url: process.env.YAHOO_WEATHER, method: 'get' })
        return returnSearch(calculateTemperature)(response)
    } catch (err) {
        throw new Error("Error: search weather yahoo..")
    }
}



