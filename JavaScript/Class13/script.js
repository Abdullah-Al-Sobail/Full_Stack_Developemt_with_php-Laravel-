// var myCustomObj = {
//     name: 'Muaz Muhammad',
//     age: '25',
//     job: 'Teacher',
//     anotherObj:{
//         name: 'Arijit Datta',
//          msg: function(){
//         console.log ('My name is ' + this.name);
//     }
//     }
   
// }
// myCustomObj.anotherObj.msg()
// var myCustomObj = {
//     name: 'Muaz Muhammad',
//     age: '25',
//     job: 'Teacher',
//     anotherObj:{
//         name: 'Arijit Datta',
//          value: function(){
//         console.log ('My name is ' + this.name);
//     }.call(myCustomObj)
//     }  
// }
// myCustomObj.anotherObj.value();
// myCustomObj.anotherObj.value.call(myCustomObj)
// var muaz = {
//     name: 'Md Muaz',
//     dob: 1999,
//     age: function(currentYear){
//         console.log(this.name + ' is ' + (currentYear - this.dob) + ' years old');
//     }
// }

// var sobail = {
//     name: 'Abd Al Sobail',
//     dob: 1998
// }

// // muaz.age(2020);
// muaz.age.call(sobail, 2020);
// var myCustomObj = {
//     name: 'Muaz Muhammad',
//     age: '25',
//     job: 'Teacher',
//     anotherObj:{
//         name: 'Arijit Datta',
//          value: function(){
//         console.log ('My name is ' + this.name);
//     }
//     }  
// }
// myCustomObj.anotherObj.value.apply(myCustomObj);

var muaz = {
     name: 'Md Muaz',
     dob: 1999,
     age: function(currentYear, msg){
        console.log(msg + ' ' + this.name + ' is ' + (currentYear - this.dob) + ' years old');
    }
 }

 var sobail = {
    name: 'Abd Al Sobail',
    dob: 1998
 }
//  muaz.age(2020 , 'Hello world!');
//  muaz.age.apply(sobail , [2020, 'Hola!']);
 var sobailAge = muaz.age.bind( sobail,2025);
 sobailAge('yess!');
 sobailAge('hahah')

 var myCustomObj = {
    name: 'Muaz Muhammad',
    age: '25',
    job: 'Teacher',
    anotherObj:{
        name: 'Arijit Datta',
         value: function(){
        console.log ('My name is ' + this.name);
    }
    }  
}
myCustomObj.anotherObj.value.bind(myCustomObj);