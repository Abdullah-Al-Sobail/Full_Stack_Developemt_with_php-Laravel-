function show() {
  alert("this dom is created for me");
}
const clickMeBtn = document.getElementById("box1");
clickMeBtn.onclick = function (event) {
  event.stopPropagation();
  console.log("button Clicckd");
};
// yourElement.addEventListener(typeofEvent, handler);

const box1 = document.getElementById("box1");

box1.addEventListener("click", function () {
  console.log("Click on box1");
  console.log("Click on box1 again");
});
// const link = document.getElementById('link');
// link.addEventListener('click', function(event){
//     event.preventDefault();
// })
var box4 = document.getElementById("box4");
box4.addEventListener("click", function (event) {
  if (event.target.tagName === "LI") {
    console.log("clickd on the list item");
  }
});

const inputs = document.querySelectorAll("input");
const submitBtn = document.querySelector("button[type=submit]");

inputs[0].addEventListener("change", function (event) {
  console.log(event.target.value);
});

submitBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (inputs[0].value === "" || inputs[1].value === "") {
    alert("Please fill the input field");
  } else {
    var input0Data = inputs[0].value;
    var input1Data = inputs[1].value;
    console.log('Your Name: ', input0Data, 'and Your Email: ', input1Data);
  }
});
