	function Script(){ 
alert('Script loaded'); 
}
Script();


function myLoadFunction() { // function name
var element = document.getElementById('heading'); // store the id named heading from html
element.firstChild.nodeValue = 'and changed using js';
}

document.addEventListener('click', myLoadFunction); // calls the function when it is clicked




