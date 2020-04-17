const { map, lensPath, over, toUpper, pipe, view } = require('ramda')
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

const capitalizeAndAppend = pipe(
    toUpper,
    flavour => `${flavour} IS A GREAT FLAVOUR`
)

const capitalizeAndAppendFlavour = pipe(
    over(favoriteFlavourLens, capitalizeAndAppend),
    view(favoriteFlavourLens)
)

const capitalizeAndAppendFlavours = map(capitalizeAndAppendFlavour)

console.log(capitalizeAndAppendFlavours(employees))
