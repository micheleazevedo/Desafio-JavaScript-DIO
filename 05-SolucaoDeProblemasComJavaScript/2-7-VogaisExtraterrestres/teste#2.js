/*Ainda tem um erro porque não passa nos fechados*/

let a = gets()

do {
let substring = a.split('');
let string = gets();
let count = 0;
substring.forEach(item => {

  let match = (string.match(new RegExp(item, "gs")) || []).length;
  count+= match
})

console.log(count);
a = gets();
} while( a !== '');
