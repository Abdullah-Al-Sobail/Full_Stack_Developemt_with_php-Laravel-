function show() {
    alert('this dom is created for me');
}
const clickMeBtn = document.getElementById('box1');
clickMeBtn.onclick = function(){
    console.log ('button Clicckd')
}

