// var aFunc = function(){
//     console.log('a demo of ES5 function');
// }

// const aFunc6 = () => console.log('a demo of Es6 arrow');

// const dob =[1996, 2010, 1999, 2020];

// const currentAge5 =dob.map(function(oneDob){
//     return 2025 - oneDob;
// });

// const currentAge6 = dob.map(oneDob => 2025 - oneDob);
// const currentAge62 = dob.map((oneDob, index )=> `${index}: ${2025 - oneDob}`);
// const currentAge63 = dob.map(oneDob => {
//     const age = 2025 - oneDob;
//     return age;
// });


// const lex5 = {
//     aFunc: function(){
//         console.log(this);
//         return function() {
//             console.log(this);
//         }
//     }
// }
// const lex6 = {
//     aFunc: () => {
//         console.log(this);
//         return() => console.log(this);
//     }
// }
const nodlist = document.querySelectorAll('.box-content');
// const nodeToArr = Array.prototype.slice.call(nodlist);
const nodeToArr6 = Array.from(nodlist);

// var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// for(var i =0; i < numbers.length; i++){
//     if(numbers[i] === 5) break;
//     console.log('Number printed: ' + numbers[i]);
// }

// for(const number of numbers){
//     if(number === 5) break;
//     console.log(`number printed: ${number}`);
// }
var numbers = [19, 23, 30, 15, 65, 45, 100];
// var findNum = numbers.map( function(theNum){
//     return theNum === 65;
// })
numbers.findIndex(number => number === 65);
 