function formValidator(){
    // references to our fields
	var username = document.getElementById('username');
    var pass = document.getElementById('password');

    
    
    // Check each input in the order that it appears in the form!
    if((isAlphabet(username, "Please enter only letters for your name"))&&(lengthRestriction(username, 4, 15))&&(notEmpty(username,"Username Field cannot be empty"))){
        if((isAlphanumeric(pass, "Numbers and Letters Only for Password"))&&(notEmpty(pass,"Password Field cannot be empty"))&&(lengthRestriction(pass, 4, 15))){
            
    }
   }
    
    return false;
	
    
}

function notEmpty(elem, helperMsg){
    if(elem.value.length == 0){
        alert(helperMsg);
        elem.focus(); // set the focus to this input
        return false;
    }
    return true;
}

function isNumeric(elem, helperMsg){
    var numericExpression = /^[0-9]+$/;
    if(elem.value.match(numericExpression)){
        return true;
    }else{
        alert(helperMsg);
        elem.focus();
        return false;
    }
}

function isAlphabet(elem, helperMsg){
    var alphaExp = /^[a-zA-Z]+$/;
    if(elem.value.match(alphaExp)){
        return true;
    }else{
        alert(helperMsg);
        elem.focus();
        return false;
    }
}

function isAlphanumeric(elem, helperMsg){
    var alphaExp = /^[0-9a-zA-Z]+$/;
    if(elem.value.match(alphaExp)){
        return true;
    }else{
        alert(helperMsg);
        elem.focus();
        return false;
    }
}

function lengthRestriction(elem, min, max){
    var uInput = elem.value;
    if(uInput.length >= min && uInput.length <= max){
        return true;
    }else{
        alert("Please enter between " +min+ " and " +max+ " characters");
        elem.focus();
        return false;
    }
}

function madeSelection(elem, helperMsg){
    if(elem.value == "Please Choose"){
        alert(helperMsg);
        elem.focus();
        return false;
    }else{
        return true;
    }
}

function emailValidator(elem, helperMsg){
    var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if(elem.value.match(emailExp)){
        return true;
    }else{
        alert(helperMsg);
        elem.focus();
        return false;
    }
}

/* function cakecal(){
	var cake1 = document.getElementById('Round Cake 6');
	var cake2 = document.getElementById('Round Cake 8');
	var cake3 = document.getElementById('Round Cake 10');
	var cake3 = document.getElementById('Round Cake 12');
	var candle = document.getElementById('candles');
	var result;
	
	if(candle.checked = !candle.checked){
		result = 5 */
	
	
	
	

