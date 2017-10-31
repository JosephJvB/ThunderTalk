
var request = require('superagent')
var cheerio = require('cheerio')
var fs = require('fs')
var path = require('path')

function getImageRecursive (idx, arr) {
  return new Promise(function (resolve, reject) {
    console.log(idx)
    request
      .get('https://www.pokemon.com/us/pokedex/' + idx)
      .then(res => {
        var $ = cheerio.load(res.text)
        var pokemon = getPokemon($)
        arr.push(pokemon)
        writeFile(arr)
          .then(message => console.log(message))
          .catch(err => {
            console.log(err)
          })
        if (idx >= 805) resolve(arr)
        else resolve(getImageRecursive(idx + 1, arr))
      // console.log(res.text);
      })
      .catch(err => {
        console.log(err)
        resolve(getImageRecursive(idx, arr))
      })
  })
}
const getPokemon = ($) => ({
  image: getImage($),
  number: getNumber($),
  name: getName($),
  description: getDescription($)
})

const getImage = ($) => $('.profile-images').find('img')[0].attribs.src

const getName = ($) => $('.pokedex-pokemon-pagination-title')[0].children[1].children[0].data.split(' ').filter(c => c != ' ').join('').split('\n')[1]

const getNumber = ($) => $('.pokedex-pokemon-pagination-title')[0].children[1].children[1].children[0].data.split('#')[1]

const getDescription = ($) => $('.version-y')[0].children[0].data.split(' ').filter(c => c != '').join(' ').split('\n').filter(c => c != '').join(' ').split('').filter((a, b, c) => b != 0).join('')
