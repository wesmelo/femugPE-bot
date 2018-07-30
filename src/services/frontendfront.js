const axios = require('axios')
const cheerio = require('cheerio')

module.exports.leanResponse = (html) => {
    let $ = cheerio.load(html)
    return $('.story-title').map((index, element) => ({
        title: $(element).find('.story-link').text(),
        link: $(element).find('.story-link').attr('href')
    })).get()
}


module.exports.searchNoticies = async (leanResponse) => {
    try {
        const response = await axios({ url: process.env.FRONTEND_NOTICIES, method: 'get' })
        const lean = await leanResponse(response.data)
        return Promise.resolve(lean)
    } catch (err) {
        return Promise.reject(err)
    }
}

