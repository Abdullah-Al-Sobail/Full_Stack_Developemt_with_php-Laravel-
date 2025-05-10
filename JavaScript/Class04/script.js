
// function funcName(){
//     console.log('hello i am from function');
// }

// funcName();

//   var funcName = function(){
//     console.log('hello i am from function')
//   }
//   funcName();

//   function sum_mechine(num1, num2){
//     sum = num1 + num2 ;
//      return sum;
//  }
// console.log(sum_mechine(2 ,2));
// console.log(sum_mechine(4 ,"m"));

// function callMyName(name, call){
//     var myAge ="25";
//     call(myAge);
//     console.log('Hello i am Mr.' + name);
// }
// function hello (xyz) {
//     console.log( 'My age is:' + xyz);
// }

// callMyName('Muaz', hello);
// console.log(this)
// function hellothis(){
//     'use strict';
//     console.log(this);
// }
// hellothis();
// function unName(){
//     this.name = 'Muaz';
// }
// unName();
function greet(name) {
      return "Hello, " + name;
    }

    const greetArrow = name => "Hi, " + name;

    const person = {
      name: "Muaz",
      greet: function () {
        document.getElementById("output").innerText = "Regular: " + this.name;
      },
      greetArrow: () => {
        document.getElementById("output").innerText = "Arrow: " + this.name;
      }
    };

    function showGreet() {
      document.getElementById("output").innerText = greet("Muaz");
    }

    function showArrow() {
      document.getElementById("output").innerText = greetArrow("Muaz");
    }

    function showThis() {
      person.greet();       // shows "Regular: Muaz"
      person.greetArrow();  // shows "Arrow: undefined"
    }