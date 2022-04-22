// The `movies` array from the file `src/data.js`.
console.log('movies: ', movies);


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrMovies) {
  const allDirectors = arrMovies.map(function(elem){
    return elem.director
  })
  return allDirectors
}

//1.1 NO ENTIENDO PORQUE
function getAllDirectors(arrMovies) {
  const allDirectors = arrMovies.map(function(elem){
    return elem.director
  }) 
  const uniqueDirectors = allDirectors.filter ((elemento, index) => {
    return allDirectors.indexOf(elemento)===index
  });
  return uniqueDirectors
}

console.log (getAllDirectors(movies))


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  const spielbergMovies = arr.filter(function(elem){
    return elem.director === "Steven Spielberg"
  })
  const drama = spielbergMovies.filter(function(elem){
    return elem.genre.includes("Drama")
  })
  return drama
}


// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  const allScore = arr.map(function(elem){
    return elem.score
  })
  const totalScore = allScore.reduce(function(accumalator,currentValue){
    return accumalator + currentValue
  })
  const avarageScore = totalScore / allScore.length 
  return avarageScore.toFixed(2);
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  const allDramaMovies = arr.filter(function(elem){
    return elem.genre.includes("Drama")
  })
 const allScore = allDramaMovies.map(function(elem){
    return elem.score 
}) 
  const sumDramaScores = allScore.reduce(function(acc, current){
    return acc + current
  })
  const avarageDramaScores = sumDramaScores / allDramaMovies.length
  return avarageDramaScores.toFixed(2)
  }
      
// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
//NOT SURE IF IT IS WORKING
function orderByYear(arr) {
  const deepCopy = JSON.parse(JSON.stringify(arr));
  
  const sortedArr = deepCopy.sort((a, b) => a.year - b.year) || a.title.localeCompare(b.title);
  
  return sortedArr
} 

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  const titles = arr.map(function(elem){
   return elem.title
 })
const twentyTitles = titles.slice(0,20)

const ordered = twentyTitles.sort((a, b) => {
 if (a < b) return -1; // a is less than b
 if (a > b) return 1; // a is greater than b
 if (a === b) return 0; // a equals b
  })
 return ordered
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
