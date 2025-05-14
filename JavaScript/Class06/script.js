// for (var i=0; i<10 ; i++) {
//     console.log('Go ' + i + ' step');
// }

// console.log('inside the loop');console.log('inside the loop');

//  var number;
//   do {
//      console.log('inside the loop');
//     number = prompt('Enter the value: ');
//  } while (number<10);
//  console.log('outside of loop');

// const student = {name: "Muaz", age : 25, country : 'Bd'};
//  for (let key in student){
//     console.log( key + ":" + student[key]);
//  }

//  let fruits = ["Mango", "Jack", "Banana", "Apple"];
//  for (let fruit of fruits) {
//     console.log(fruit);
//  }

function runForLoop() {
  let text = "";
  for (let i = 1; i <= 5; i++) {
    text += "For Loop: " + i + "<br>";
  }
  document.getElementById("output").innerHTML = text;
}

function runWhileLoop() {
  let i = 1, text = "";
  while (i <= 5) {
    text += "While Loop: " + i + "<br>";
    i++;
  }
  document.getElementById("output").innerHTML = text;
}

function runDoWhileLoop() {
  let i = 1, text = "";
  do {
    text += "Do...While Loop: " + i + "<br>";
    i++;
  } while (i <= 5);
  document.getElementById("output").innerHTML = text;
}

function runForInLoop() {
  const student = {name: "Muaz", age: 25, city: "Ctg"};
  let text = "";
  for (let key in student) {
    text += key + ": " + student[key] + "<br>";
  }
  document.getElementById("output").innerHTML = text;
}

function runForOfLoop() {
  const fruits = ["Apple", "Banana", "Orange"];
  let text = "";
  for (let fruit of fruits) {
    text += "Fruit: " + fruit + "<br>";
  }
  document.getElementById("output").innerHTML = text;
}