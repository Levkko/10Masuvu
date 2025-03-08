let ivan = { name: "Іван", age: 25 };
let petro = { name: "Петро", age: 30 };
let mariya = { name: "Марія", age: 28 };

let arr = [petro, ivan, mariya];

function sortByAge(arr) {
    arr.sort((a, b) => {
      if (a.age < b.age) return -1;
      if (a.age > b.age) return 1;
      if (a.age == b.age) return 0;
    });
  }
  

sortByAge(arr);

// now: [ivan, mariya, petro]
alert(arr[0].name); // Іван
alert(arr[1].name); // Марія
alert(arr[2].name); // Петро
