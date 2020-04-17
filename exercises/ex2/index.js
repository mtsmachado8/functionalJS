const { pipe, median, filter, pluck, lte, divide, flip } = require('ramda')
const employees = require('./employees')

// Get salaries
// Reject anything below $100,000
// Get the median
// Calculate monthly paycheck (amount / 12 months)
// Format dollars (USD)

const toUSD = (number) => number.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
})

const getMedianPaycheck = pipe(
    pluck('salary'), // [{}] -> [Number]
    filter(lte(100000)), // [Number] -> [Number] > 100000
    median, // [Number] > 100000 -> Number
    flip(divide)(12), // Number -> Number/12
    toUSD // Number/12 -> USD string
)


console.log(getMedianPaycheck(employees))