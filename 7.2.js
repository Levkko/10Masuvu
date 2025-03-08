//A function which takes an array of numbers and maxNumber, 
//the function returns new array with numbers not higher than maxNumber

function filterNumbers(arr, maxNumber) { 
    return arr.filter(num => num <= maxNumber)
}

alert(filterNumbers([1, 4, 8, 1, 20], 5)) // [1, 4, 1]