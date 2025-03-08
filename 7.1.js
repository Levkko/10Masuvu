//A function which returns factorial of number using recursion

function factorial(n) { 
    if (n === 0) {
        return 1;
    } else {
        let result = 1;
        for (let i = 1; i <= n; i++) {
            result = i * result;
        }
        return result;
    }
 }
factorial(3); // 6
factorial(5); // 120

// потім догадався що можна було просто: return n * factorial(n - 1);

  

