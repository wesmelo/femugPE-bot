const axios = require('axios')
const cheerio = require('cheerio')

module.exports.leanResponse = (html) => {
    let $ = cheerio.load(html)
    return $('.issue-list-item').map((index, element) => ({
        title: $(element).find('.text-normal').text().trim(),
        link: `${process.env.GITHUB_LINK}${$(element).find('a').attr('href')}`
    })).get()
}

module.exports.tratmentSearch = listJobs => listJobs.filter((value) => !value.title.indexOf('[Recife/PE]') || !value.title.indexOf('[Recife]'))

module.exports.searchJobs = async (tratmentSearch, leanResponse) => {
    try {
        const response = await axios({ url: process.env.GITHUB_VAGAS, method: 'get' })
        const lean = await leanResponse(response.data)
        return tratmentSearch(lean)
    } catch (err) {
        return Promise.reject(err)
    }
}


