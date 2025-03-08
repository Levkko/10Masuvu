let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(users) {
    let totalAge = 0;
    for (let user of users) {
        totalAge += user.age;
    }
    return totalAge / users.length;
}

alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
