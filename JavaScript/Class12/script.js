function popup(){
    alert("I am JS")
}
function myfunction(e){
    let x = e.clientX;
    let y = e.clientY
    let coor = "Coordinate: (" + x + ","+ y + " )";

    document.getElementById("demo").innerHTML = coor ;
}
 function myCar(){
    var x = document.getElementById('myFav').value;

    document.getElementById("demo").innerHTML = "My fav car is: " + x;
 }
 function localScope(){
    var local = 'I am local scope';
    console.log(local);
 }
 localScope();
//  console.log(local);
  var globalVar = 'i am gobal scope';

  function gobalScope(){
    console.log('inside a function: ' +  globalVar);
  }
  gobalScope();
  console.log('Outside: ' + globalVar);
   function parFunc(){
    var a = 6;
    function childFunc(){
        var b =4 ;
        console.log ('sum: '+ (a + b)); 
    }
    childFunc();
   }
   parFunc();