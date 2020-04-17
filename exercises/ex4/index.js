const { map, lensPath, pipe, view, over } = require('ramda')
const employees = require('./employees')


// Favorite flavours with lenses
// Capitalizes all the flavors
// Appends “IS A GREAT FLAVOR” to each one
// Returns them

const favoriteFlavourLens = lensPath([
    'interests',
    'foods',
    'sweets',
    'iceCream',
    'favoriteFlavor'
])

favoriteFlavour = pipe(
    over(favoriteFlavourLens),
    (data) => console.log(data)
)
// flavoriteFlavours = map(favoriteFlavour)

console.log(favoriteFlavour(employees[0]))