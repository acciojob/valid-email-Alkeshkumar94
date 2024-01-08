function validEmail(str) {
  //your JS code here.
	let pattern = /^([a-zA-Z0-9\.]+@+[a-zA-Z]+(\.)+[a-zA-Z]{2,3})$/;
	var result = pattern.test(str);
	return result;
}


// Do not change the code below.
const str = prompt("Enter an email address.");
alert(validEmail(str));
