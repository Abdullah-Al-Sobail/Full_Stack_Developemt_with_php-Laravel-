//   'use strict'
// var name = 'Muaz';
// var age = 25;

// address = 'ctg';

// console.log('My name is' + name + 'and i am' + age + 'years old');
// function aFunc(){
 
//     job = 'student';
//     console.log(' this function is in strict mode');
// }
// aFunc();
// console.log('I am a ' + job + 'and i am from' + address);

// var name = 'Muaz';
// var age = 25;

// address = 'ctg';

// console.log('My name is' + name + 'and i am' + age + 'years old');
// function aFunc(){
//    'use strict'
//     job = 'student';
//     console.log(' this function is in strict mode');
// }
// aFunc();
// console.log('I am a ' + job + 'and i am from' + address);

//   var nam = 'Muaz';
//  var age = 25;

//  address = 'ctg';

//  console.log('My name is' + nam + 'and i am' + age + 'years old');
//  function aFunc(){
 
//      job = 'student';
//     console.log(' this function is in strict mode');
// }
//  aFunc();
// console.log('I am a ' + job + 'and i am from' + address);
// 'use strict'
// var name = "Arijit";
// nama = 'datta arijit';
// console.log(nama);
// var obj = {
//     name: 'Tashfiya ulla',
//     job: 'student'
// }
// Object.preventExtensions(obj);
// obj.age =23;
// console.log(obj.age);
// 'use strict'
// var obj = {
//     name: 'Tashfiya ulla',
//     job: 'student'
// }
// Object.preventExtensions(obj);
// obj.age =23;
// console.log(obj.age);

// var samir = {
//     name : 'Samir sah',
//     age :24,
//     job : 'student'
// }
// var amir = {
//     name : 'Amir Khan',
//     age : 29,
//     job : 'Actor'
// }
// var jamil = {
//     name : 'Jamil hossain',
//     age : 24,
//     job : 'student'
// }
// var babu = {
//     name : 'Babu',
//     age :1,
//     job : 'child'
// }

// var Person =  function(nameArg, ageARG, jobArg){
//     this.name = nameArg;
//     this.age = ageARG;
//     this.job = jobArg;
// }
// var samir = new Person('Samir Sah',  25, 'student');
// var amir = new Person('Amir Khan',  29, 'Actor');
// var jamil = new Person('jamil hossain',  24, 'student');
// var babu = new Person('Babu',  1, 'Child');

// var Personwithmetod =  function(name, age, job){
//      this.name = name;
//      this.age = age;
//     this.job = job;
//     this.dateOfBirth = function(){
//       console.log(this.name + ' is born in ' + (2025- this.age));
//     }
//  }

//  var samir = new Personwithmetod('Samir Sah', 25 , 'student');

// var PersonOnly=  function(name, age, job){
//      this.name = name;
//      this.age = age;
//     this.job = job;
 

// }
//    PersonOnly.prototype.dateOfBirth = function(){
//     console.log(this.name + ' is born in ' + (2025- this.age));

// }
// var babu = new PersonOnly('Babu',  1, 'Child');
// babu.dateOfBirth();
// PersonOnly.prototype.address = 'Bangladesh';
// console.log(babu.address);
var Person=  function(name, age, job){
     this.name = name;
     this.age = age;
    this.job = job;

}
// var Teacher=  function(name, age, job, subject){
//      this.name = name;
//      this.age = age;
//     this.job = job;
//     this.subject = subject;
 
// }
var Teacher=  function(name, age, job, subject){
    Person.call(this, name, age, job)
    this.subject = subject;
 
}
var muaz = new Teacher( 'Muaz Muhammad', 25 , 'teacher', 'Javascript');