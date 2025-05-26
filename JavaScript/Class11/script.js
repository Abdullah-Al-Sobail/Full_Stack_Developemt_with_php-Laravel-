// console.dir(Date);
// const date = Date()
// console.log(date);
// console.log(new Date(0));
// console.log(new Date(2000, 1, 30));
//  const dateObj = new Date()
// console.log(`getDate: ${dateObj.getDate()}`);
// dateObj.setMonth(9);
// dateObj.setMonth(15);
// console.log(dateObj);
function showDate(){
    const now = new Date();
    const formatted = `${now.getDate()}/ ${now.getMonth()+1}/${now.getFullYear()} -${now.getHours}: ${now.getMinutes()}`;
    document.getElementById("result").innerHTML = ` Current: ${formatted}`;
}
 function showBirhthday(){
    const birthday = new Date();
    birthday.setFullYear(1999);
    birthday.setMonth(3);
    birthday.setDate(15);
     document.getElementById("result").innerHTML = `Birthday set to: ${birthday.toDateString()}`;
 }