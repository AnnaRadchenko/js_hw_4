///задача № 1////////////////

function fib(n){
	if(n>2){
	n = fib(n-1) + fib(n-2);
	return n;
}else{
	return 1;
}
}
alert( fib(3) );
alert( fib(9) );

///задача № 2////////////////

// в чем ошибка?

var target1 = spam;
var target2 = sex;

function checkSpam( string ){
	var newString = string.toLowerCase();

     return !!(newString.indexOf(target1) || newString.indexOf(target2));

}

checkSpam('get new Sex videos'); 
checkSpam('[SPAM] How to earn fast money?'); 
checkSpam('New PSD template');

///задача № 3////////////////

function checkString( string ){
	if( string.length > 20){
		return  string.slice(0, 20) + "...";

	}else{
		return string;
	}
}
checkString( "stringstringstringstringstringstringstringstringstring" );
