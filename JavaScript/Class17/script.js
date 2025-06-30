// var numbers = [1, 2, 3, 4];

// function cal (a, b, c, d){
//     console.log('Sum: '+ (a + b + c + d));
// }
// cal(1,2,3,4) //es5
// cal.apply(null, numbers) //es5
// cal(...numbers) //es6

// var arrNane =['Arjit' , 'Tashfiya', 'Mahzabin'];
// arrNane.unshift('Nafisa')
// arrNane.push('sazia')
// const arrName6= ['Muaz', ...arrNane, 'javascript']

// const minhaz =['Minhazul Islam', 25, 'Student'];
// var name = minhaz[0];
// var age = minhaz[1];
// var prof = minhaz[2];
// console.log(name);
// console.log(age);
// console.log(prof);
// const [name6, age6, prof6] = minhaz;
// console.log(name6);
// console.log(age6);
// console.log(prof6);

// const muazObj = {
//     nameObj: 'Muaz Muhammad',
//     ageObj: 25,
//     profObj: 'Teacher'
// };
// var nameObj5 = muazObj.nameObj;
// var ageObj5 =muazObj.ageObj;
// var profObj5 =muazObj.profObj;

// console.log(nameObj5)
// const { nameObj, ageObj, profObj} = muazObj;
// console.log(nameObj)
// console.log(ageObj)
// var comObj = {
//     anotherObj : {
//         newObj : {
//             title: 'JavaScript ES6'
//         }
//     }
// };
// const{ anotherObj:{ newObj:{ title }}} = comObj;
// console.log(title);
// const{ anotherObj:{newObj:{title: newTitle }}} = comObj;
// console.log(newTitle)
// function arguments5(){
//     for(var i = 0; i< arguments.length; i++){
//         console.log ('Argument passed:' + arguments[i])
//     }
// }

// arguments5('Bd', 'Ind', 'nep', 'bu',);
// arguments5('rice', 'milk','bread');

// const argumentsArr = () => {
//     for(var i = 0; i< arguments.length; i++){
//         console.log ('Argument passed:' + arguments[i]);
//     }
// }
// argumentsArr('Bd', 'Ind', 'nep', 'bu',);
// arguments5('rice', 'milk','bread');
// function arguments6(...anyName){
//     for(var i = 0; i< anyName.length; i++){
//         console.log ('Argument passed:' + anyName[i])
//     }
// }
// arguments6('Bd', 'Ind', 'nep', 'bu',);
// arguments6('rice', 'milk','bread');
// const arguments6 = (...anyName) => {
//     for(var i = 0; i< anyName.length; i++){
//         console.log ('Argument passed:' + anyName[i])
//     }
// }
// arguments6('Bd', 'Ind', 'nep', 'bu',);
// arguments6('rice', 'milk','bread');
// function defParams (name, age) {
//     name ? name =name : name = 'Muaz'
//     age ? age = age : age = 25
//     console.log( 'my name is ' + name + ' and i am ' + age);
// }
// defParams();
// defParams('Sobail');
// function defParams6 (name = 'Muaz', age = 25) {
    
//     console.log( 'my name is ' + name + ' and i am ' + age);
// }
// defParams6();
// defParams6('Ahamed');
function defParams (name, age) {
     name ? name =name : name = 'Muaz'
     age ? age = age : age = 25
     this.name =name;
     this.age =age;
}
var muaz = new defParams();
console.log(muaz.name);
var Kabir = new defParams('kabir ahmed', 22);
console.log(Kabir.name);

function defParams6 (name = 'Muaz', age = 25) {
    this.name = name;
    this.age = age;

 }

 var muaz6 = new defParams6();
 console.log(muaz6.age)
 var Kabir6 = new defParams6('kabir ahmed', 22);
 console.log(Kabir6)