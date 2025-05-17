// var sobail = new Object()
// var sobail = {
//     fullname: "Abdullah Al sobail",
//     age: 25,
//     Address: "Ctg",
//     Profession : "Engineer"
// }
// console.log(sobail);
// sobail.welcomeMsg = function(){
//     console.log('Hello there!')
// }

// var sobail = {
//     fullname: "Abdullah Al sobail",
//     age: 25,
//     Address: "Ctg",
//     Profession : "Engineer",
//     welcomeMsg : function(){
//     console.log('Hello there!');
// }
// }
// console.log(sobail);
// var objArr = {
//     normal: 'normal item',
//     name: ['Sobail', 'Muaz', 'Arif'],
//     age: [25, 26 ,27]
// }

// var arrObj =['Hasan',
//     {
//         name: 'Mahmud',
//         age :22,
//         job : 'student',
        
//     },
//     'Bangladesh'
// ]
// // console.log(Object.values(objArr));
// console.log(Object.entries(arrObj));
// let jsonString = JSON.stringify(objArr);
// console.log(jsonString)
let person ={
    name : 'Muaz',
    age: 25,
    greet: function(){
        return "Hello,i am" + this.name;
    }
};
function showPerson(){
    let result= `
    Name: ${person.name} <br>
    Age: ${person.age}<br>
    Greet : ${person.greet()}
    `;
    document.getElementById('output').innerHTML = result;
}
function showCons(){
    function Student(name, age) {
        this.name = name ;
        this.age = age;
        this.info =  function(){
            return `Name: ${this.name}, Age: ${this.age}`;

        };
    }

    let s1 = new Student('Ayaan', 25);
    let s2 = new Student ('Sobail', 22);
document.getElementById('output').innerHTML = s2.info();
}
