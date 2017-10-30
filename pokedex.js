const puppeteer = require('puppeteer')
// const {pokemon} = require('./pokedex') NO. BAD. STOP.

const pokemon = ['bulbasaur', 'charmander', 'mewtwo', 'jolteon', 'exeggutor']

pokemon.forEach(name => getData(name))

// function start () {
async function getData (pokemon) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto(`https://www.pokemon.com/us/pokedex/${pokemon}`)
  await page.waitFor(1000)
  await page.setViewport({width: 1000, height: 1150})
  await page.screenshot({path: `./pokedex/${pokemon}.jpg`})

  await browser.close()
}
//   start()
// }
