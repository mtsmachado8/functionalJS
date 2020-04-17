const { cond, lte, map, gte } = require('ramda')
const scores = require('./scores')


// Given a list of credit scores, return a list of reviews.
// If the score’s at or above 800, return “{score} is excellent!”
// If the score’s at or above 700, return “{score} is good”
// If the score’s at or above 650, return “{score} is fair”
// If the score’s at or below 649, return “{score} is poor”

const getCreditScoreRatings = cond([
    [lte(800), score => `${score} is excellent!`],
    [lte(700), score => `${score} is good!`],
    [lte(650), score => `${score} is fair!`],
    [gte(649), score => `${score} is poor!`]
])

scoreStrings = map(getCreditScoreRatings)

console.log(scoreStrings(scores))