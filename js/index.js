/*function fibNumber(n){
	if (n==1||n==2) return 1;
	else return fibNumber(n-2)+fibNumber(n-1);		
	}
	var userNumber=+prompt('Введіть  номер числа Фибоначчі');
alert(fibNumber(userNumber)); 
*/
/*var fib = [0, 1];
for(var i=fib.length; i<1000; i++) {
    fib[i] = fib[i-2] + fib[i-1];
}

alert(fib[5]);
*/
var a,b,result;
a = 0;
b = 1;
result = b;
for(var i = 1; i<100; i++) {
        document.write(result + '<br>')
        result =a + b;
    a=b;
    b=result;
    }
    