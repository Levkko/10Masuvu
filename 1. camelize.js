// Моє рішення
const camelize = (str) => {
    str = str.split('-');
    str = str.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
    str = str.join('');
    str = str.charAt(0).toLowerCase() + str.slice(1);
    return str;
}



// Рішення від learn.javascript.ru
function camelize(str) {
    return str
      .split('-')
      .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
      .join('');
  }