// if (3<5) {
//     console.log('this statement is write');
// }
// var myName = 'Muaz';
// if (myName === 'Arijit'){
//     console.log('Welcome')
// }
// var myAge =25;
// if (9>10){
//     console.log('Greater');
// }
// if(myAge >=25){
//     console.log('you are adult');

// }
// if(myAge<25) {
//     console.log('you are not adult')
// }
// if (myAge>=20 && myAge <60){
//     console.log('you are adult');
// }

// var age =18; 
// if(age>18){
//     console.log ('eligible to vote');
// }
// else{
//     console.log('not eligible to  vote');
// }
//   var week ='monday';
//   if (week === 'friday'){
//     console.log('off day');
//   }
//   else if (week === 'thursday'){
//     console.log('half day');
//   }
//   else if (week === 'saturday'){
//     console.log('half off day');
//   }
//   else {
//     console.log('working day');
//   }

//   var num =6;
//   if (num>1){
//     if (num>10){
//         console.log ('greater then 10');
//     } else{
//         console.log ('somewher between 2-10');
//     }
//   }

//   var roll =1;
//   switch (roll) {
//     case 1:
//         console.log('Arijt');
//         break;
//     case 2:
//         console.log('Mahzabin');
//         break;
//     case 3:
//         console.log('Nafisa');
//         break;
//     case 4:
//         console.log('Sajia');
//         break;
//     case 5:
//         console.log('Tashfiya');
//         break;
//     case 6:
//         console.log('Taslima');
//         break;
//     case 7:
//         console.log('Ehsan');
//         break;
//     case 8:
//         console.log('Saima');
//         break;
//          default:
//             console.log('others')
//   }
function checkAge(){
    let age =16;
    if(age >=18) {
        document.getElementById("output").innerHTML =" you can vote";
    } else{
        document.getElementById("output").innerHTML =" you can not vote";
    }
}
function result(){
    let score=45;
    if(score>=80){
         document.getElementById("output").innerHTML =" Grade A";
    }
    else if(score>=70){
         document.getElementById("output").innerHTML =" Grade B";
    }
    else if(score>=50){
         document.getElementById("output").innerHTML =" Grade c";
    }
    else{
         document.getElementById("output").innerHTML =" Grade F";
    }
}
function showDay(){
    let day ='saturday';
    let message;
    switch(day){
        case "Monday":
            message ="start of the week";
            break;
        case "thursday":
            message ="almost weekend";
            break;
        case "Friday":
            message ="weekend";
            break;
            default:
                message="regular day";
    }
     document.getElementById("output").innerHTML = message;
}