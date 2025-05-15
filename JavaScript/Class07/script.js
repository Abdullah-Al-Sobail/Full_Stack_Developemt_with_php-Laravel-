// var name1 = 'Sajia';
// var name2 = 'Mahjabin';
// var name3 ='tashfiya';
// var name4 = 'Arijit';
// var name5 = 'ahamed';
//  var arrayName = new Array('sajia', 'mahjabin', 'tashfiya','arijt', 'ahamed');

//  let arrayName = ['sajia', 'mahjabin', 'tashfiya','arijt', 'ahamed'];
//  for (let i = 0; i < arrayName.length; i++){
//     console.log('Name: ' + arrayName[i]);
//  }
function showArray(){
    const fruits =["Mango", "Banana", "Apple"];

    fruits.pop();
    fruits.splice(2);
    fruits.push("JAckfruit");
    let text = "<ul>";
    fruits.forEach(item => text += `<li>${item}</li>`);
    text += "</ul>";

    document.getElementById("output").innerHTML = text;
    
}
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);