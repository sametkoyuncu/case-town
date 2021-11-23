/*  
    Removes everything except alphanumeric characters and whitespace, 
    then collapses multiple adjacent whitespace to single spaces.   
    https://stackoverflow.com/a/4328546/14781133

    thanks to John Kugelman for this regex
*/
const cleanString = (str) => str.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ')

const camel = (str) =>
  cleanString(str)
    .split(' ')
    .map((word, index) => {
      if (index == 0) return word.toLowerCase()
      return word[0].toUpperCase() + word.slice(1).toLowerCase()
    })
    .join('')

const pascal = (str) =>
  cleanString(str)
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join('')

const kebab = (str) =>
  cleanString(str)
    .split(' ')
    .map((word) => word.toLowerCase())
    .join('-')

const snake = (str) =>
  cleanString(str)
    .split(' ')
    .map((word) => word.toLowerCase())
    .join('_')

const url = (str) =>
  cleanString(str)
    .split(' ')
    .map((word) => word.toLowerCase())
    .join('/')

const windowsPath = (str) =>
  cleanString(str)
    .split(' ')
    .map((word) => word.toLowerCase())
    .join('\\')

const title = (str) =>
  cleanString(str)
    .split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ')

const searchQuery = (str) => cleanString(str).split(' ').join('+')
const justClear = (str) => cleanString(str)
module.exports = {
  camel,
  pascal,
  kebab,
  snake,
  url,
  title,
  windowsPath,
  searchQuery,
  justClear,
}
