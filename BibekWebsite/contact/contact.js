
      function validateForm() { 

     var email=document.getElementById('email'); 
var password=document.getElementById('psw');
 var repeat= document.getElementById('psw-repeat');


 if(email.value.length==0 || password.value.length==0 ){
alert("enter email and password");
} 
            else{ 
	alert("form submitted");
}
}
 validateForm();



