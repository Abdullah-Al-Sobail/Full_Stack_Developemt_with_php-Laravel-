// const muaz = new Map();
// muaz.set('fullName', 'Muaz Muhammad');
// muaz.get('fullName');
// muaz.has('fullName');
// muaz.set('Age', 25);
// muaz.has('Age');
// muaz.delete('Age');
// muaz.clear();

// const person = new Map ();
// person.set('Name', 'Muaz Muhammad');
// person.set('age', 25);
// person.set('Job', 'teacher');
// person.set('subject','Javascript');

// console.log(person);
//  person.forEach((value, key) => console.log(` ${key} : ${value}` ))
// var child5 = function(name, dob){
//     this.name =name;
//     this.dob =dob;
// }
// var akash = new child5('Md Akash', 2000);
// console.log(akash.name);

// child5.prototype.currentAge = function(){
//     console.log(this.name + ' is ' + (2025 - this.dob));
// }
// akash.currentAge();

// class child6 {
//     constructor(name, dob){
//         this.name =name;
//         this.dob =dob;
//     }
//     currentAge(){
//         console.log(`${this.name} is ${2025 - this.dob}`);
//     }
// }

// const batsh = new child6 ('Md Batsh', 2005);
// console.log(batsh.name);
// batsh.currentAge();

// const clsExp = class{
    
// }

// class person {
//     constructor (name , age, job){
//         this.name = name ;
//         this.age = age ;
//         this.job = job ;
//         this.dob = () =>{
           

// }   
//  }
// }

// class teacher {
//     constructor (name , age, job, dob, subject){
//         this.name = name ;
//         this.age = age ;
//         this.job = job ;
//         this.subject = subject;
//         this.dob = dob ;
      
// }   
//  }
// class personClass {
//     constructor (name , age, job){
//         this.name = name ;
//         this.age = age ;
//         this.job = job ;

// }
//         dob(){
//              console.log(`${this.name} is born in ${2025 -this.age}`);
//         }
//  }
//  class TeacherClass extends personClass {
//       constructor (name , age, job, subject){
//         super(name, age, job);
//         this.subject =subject;
//       }

//  }

//  const sobail = new TeacherClass('Abd Al Sobail', 25, 'Instructor', 'Full Stake');
//  console.log(sobail.dob());

class staticMtd {
    constructor(name){
        this.name = name ;
        }
        static aStaticMtd(){
            console.log('i am spcial');
        }
}
console.log(staticMtd.aStaticMtd());

const newMeth = new staticMtd ('Muaz')
console.log(newMeth.aStaticMtd());