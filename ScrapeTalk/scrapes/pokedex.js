const puppeteer = require('puppeteer')

const pokemon = ['bulbasaur', 'charmander', 'mewtwo', 'jolteon', 'exeggutor']

pokemon.forEach(name => getData(name))

async function getData (pokemon) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(`https://www.pokemon.com/us/pokedex/${pokemon}`)
  await page.waitFor(1000)
  await page.setViewport({width: 1000, height: 1150})
  await page.screenshot({path: `./ScrapeTalk/scrapes/pokedex/${pokemon}.jpg`})

  await browser.close()
}

// api to recieve pokemon names and save those to an array, then loop through the array to print screenshots of the pokemon.
