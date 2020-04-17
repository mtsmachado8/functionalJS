const { slice, sort, pipe, propSatisfies, gte } = require('ramda')
const menu = require('./menu')

const priceLessThen = pipe(
    (maxPrice, menu) => menu.filter(propSatisfies(gte(maxPrice), 'price')),
    sort((a, b) => b.rating - a.rating),
    slice(0, 3)
)

console.log(priceLessThen(15, menu))