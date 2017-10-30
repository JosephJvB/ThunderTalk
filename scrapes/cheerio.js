const request = require('superagent')
const cheerio = require('cheerio')

function scrape () {
  request
    .get('https://www.exampleurl.com')
    .end((err, res) => {
      if (err) reject(err)
      const $ = cheerio.load(res.text)
    })
    .catch(err => reject(err))
}

scrape()
