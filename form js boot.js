

function validateForm() {

	var a = document.getElementById('Fname').value;
	var b = document.getElementById('Lname').value;
	var c = document.getElementsByName("gender");
	var d = document.getElementById('address').value;
	var e = document.getElementById('city').value;
	var f = document.getElementById('province').value;
	var g = document.getElementById('cnic').value;
	var h = document.getElementById('postal').value;
	var i = document.getElementById('phone').value;
	var j = document.getElementById('email').value;	var emailval='@';
	var k=  document.getElementById('suggestions').value;
	
	// querySelectorall() for one for all :( :( :(
	

	if (a != "") {}
   	else{
	alert("Don leave blank!");
	document.getElementById("Fname").style.borderColor="red";
	return false;
	}
	if (isNaN(a)) {}
   	else{
	alert("You must Enter alphabets");
	document.getElementById("Fname").style.borderColor="red";
	return false;
	}


 	if (b != "") {}
   	else{
	alert("Don leave blank!");
	document.getElementById("Lname").style.borderColor="red";
	return false;
	}
	if (isNaN(b)) {}
   	else{
	alert("You must Enter alphabets");
	document.getElementById("Lname").style.borderColor="red";
	return false;
	}
	
		
	var c = document.querySelector( 'input[name="gender"]:checked');
		if(c != null) {
		}
		else{
			alert("Select Male or Female");
			return false;
		}

	// if((c[0].checked == true) || (c[1].checked == true))
	// {}
	// else
	// {
	// alert("select Male or Female");
	// document.getElementsByName("gender").style.borderColor="red";
	// return false;
	// }
	

 	if (d != "") {}
   	else{
	alert("Don leave blank!");
	document.getElementById("address").style.borderColor="red";
	return false;
	}


 	if (e != "") {}
   	else{
	alert("Don leave blank!");
	document.getElementById("city").style.borderColor="red";
	return false;
	}
	if (isNaN(e)) {}
   	else{
	alert("You must Enter alphabets");
	document.getElementById("city").style.borderColor="red";
	return false;
	}


 	if (f != "") {}
   	else{
	alert("Don leave blank!");
	document.getElementById("province").style.borderColor="red";
	return false;
	}


	if (g != "") {}
   	else{
	alert("Don leave blank!");
	document.getElementById("cnic").style.borderColor="red";
	return false;
	}
	if (g.length<=14)
	{
	alert("cnic must be of 13 digits with hyphens");
	document.getElementById("cnic").style.borderColor="red";
	return false;
	}	
	else{}
		var numformat = /\d+-\d+-\d+/;	// num-num-num  [anyNum(\d+) -(-) anynum(\Sd) -(\-) anyNum(\d+)]
	if(g.match(numformat))
	{}
	else{
	alert("Enter with hyphens *****-*******-* ");  
	document.getElementById("cnic").style.borderColor="red";
	return false;
	}
	

	if (h != "") {}
   	else{
	alert("Don leave blank!");
	document.getElementById("postal").style.borderColor="red";
	return false;
	}
	if (isNaN(h)) {
	alert("You Must Enter digits!");
	document.getElementById("postal").style.borderColor="red";
	return false;
	}
   	else{
	}
	if (h.length<=5) {
	alert("6 Digits code is required!");
	document.getElementById("postal").style.borderColor="red";
	return false;
	}
   	else{}


	if (i != "") {}
   	else{
	alert("Don leave blank!");
	document.getElementById("phone").style.borderColor="red";
	return false;
	}
	if (isNaN(i)) {
	alert("Number is required only");
	document.getElementById("phone").style.borderColor="red";
	return false;
	}
	else{}
	if(i.length<=10)
	{
	alert("Phone number length is 13 required");
	document.getElementById("phone").style.borderColor="red";
	return false;
	}
	else{}
 	

	if (j != "") {}
   	else{
	alert("Don leave blank!");
	document.getElementById("email").style.borderColor="red";
	return false;
	}
	var mailformat = /\S+@\S+\.\S+/;	// string@string.string  [anyString(\S+) @(@) anyString(\S+) .(\.) anyString(\S+)]
	if(j.match(mailformat))
	{}
	else
	{
	alert("Invalid Email ");
	document.getElementById("email").style.borderColor="red";
	return false;
	}

	if (k != "") {}
   	else{
	alert("Don leave blank!");
	document.getElementById("sugestions").style.borderColor="red";
	return false;
	}
	if (k.length<=19) {
	alert("Minimum suggesetions must be more than 20 letters");
	document.getElementById("suggestions").style.borderColor="red";
	console.log("rechedddhere");
	return false;
	}
   	else{}


	
}