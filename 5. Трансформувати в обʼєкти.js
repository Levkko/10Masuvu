let ivan = { name: "Іван", surname: "Іванко", id: 1 };
let petro = { name: "Петро", surname: "Петренко", id: 2 };
let mariya = { name: "Марія", surname: "Мрійко", id: 3 };

let users = [ ivan, petro, mariya ];

let usersMapped = users.map( users => { 
    return {
        fullName: `${users.name} ${users.surname}`,
        id: users.id
    }
 } );

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName ) // Іван Іванко

//з цим завданням я спитався підказки ChatGPT, 
//бо не знав взагалі, що пілся .map можна робити функцію.
//і про `${} цю штуку, забув, це з html взагалі
// але так то завдання зрозумів