//A function that returns object with min and max numbers from array of numbers

function minMax(arr) {
    return {
      min: Math.min(...arr),
      max: Math.max(...arr)
    };
  }
  
alert(JSON.stringify(minMax([1, 4, 8, 2, 20]))); // {"min":1,"max":20}

//Колись вже було якесь завдання math.min