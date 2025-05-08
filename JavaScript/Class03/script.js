// let x=10 , y =3 ;
// console.log("x + y =" , x + y);
// console.log("x - y =" , x - y);
// console.log("x * y =" , x * y);
// console.log("x / y =" , x / y);
// console.log("x % y =" , x % y);
// console.log("x ** y =" , x**y);
// let a =10 ;
//  a += 4;
//  a *= 2;
//  a /= 7;

//  console.log (a);

// let a = 5;
// let b = "5";

//  output = a===b;
// console.log (output)

// let a= 5, b=1;

// console.log( "a & b =" , (a >> b)) 
function arithmetic() {
    let x = 8, y = 3;
    document.getElementById("output").innerHTML =
      `x + y = ${x + y}<br>x - y = ${x - y}<br>x * y = ${x * y}<br>x / y = ${x / y}<br>x % y = ${x % y}<br>x ** y = ${x ** y}`;
  }
  function assignment() {
    let a = 10;
    a += 5;
    a *= 2;
    document.getElementById("output").innerHTML = `Final value of a: ${a}`;
  }
  function comparison() {
    let res = `
      5 == '5' : ${5 == '5'}<br>
      5 === '5' : ${5 === '5'}<br>
      5 != 6 : ${5 != 6}<br>
      5 > 2 : ${5 > 2}
    `;
    document.getElementById("output").innerHTML = res;
  }
  function bitwise() {
    let a = 5, b = 1;
    let res = `
      5 & 1 = ${a & b}<br>
      5 | 1 = ${a | b}<br>
      5 ^ 1 = ${a ^ b}<br>
      ~5 = ${~a}
    `;
    document.getElementById("output").innerHTML = res;
  }







