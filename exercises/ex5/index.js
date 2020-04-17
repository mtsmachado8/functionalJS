const { map, lensPath, view } = require('ramda')
const employees = require('./employees')


// Favorite flavours with lenses

const favoriteFlavourLens = lensPath([
    'interests',
    'foods',
    'sweets',
    'iceCream',
    'favoriteFlavor'
])

favoriteFlavour = view(favoriteFlavourLens)
flavoriteFlavours = map(favoriteFlavour)

console.log(flavoriteFlavours(employees))