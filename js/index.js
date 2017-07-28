function fibNumber(n) {
    if (n == 1 || n == 2)
        return 1;
    else
        return fibNumber(n - 2) + fibNumber(n - 1);
}
var userNumber = +prompt('Input your number:');
alert(fibNumber(userNumber));

var arrNumber = parseInt(prompt("Input your number: "));
var a = 1;
var b = 1;
var arr = [1, 1];
for (var i = 3; i <= arrNumber; i++) {
    var c = a + b;
    a = b;
    b = c;
    arr.push(c);
}
for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");
}
