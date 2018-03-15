function play (){
	var inputNumber;
	try {
		inputNumber = parseInt(document.getElementById('number').value);
	} catch (err) {
		alert("Error")
	}
	var numbersOutPut="";
	for (x = 1; x <= inputNumber; x++) {

		if( x % 3 && x % 5 ) {
			numbersOutPut = numbersOutPut +". "+x.toString();
		} else {
			if( x % 3 == 0 && x % 5 == 0 ) {
				numbersOutPut = numbersOutPut +". pingpong"+"<br/>";
				continue;
			}
			if( x % 3 == 0 ) {
				numbersOutPut = numbersOutPut +". ping";
			}
			if( x % 5 == 0 ) {
				numbersOutPut = numbersOutPut +". pong";
			}
		}
		numbersOutPut=numbersOutPut+"<br/>";
	}
	document.getElementById("outPut").innerHTML = numbersOutPut;
}
