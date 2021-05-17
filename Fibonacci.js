let a = 1;
let b = 1;
function fib(n) {
    for(i = 3; i<=n; i++){
    let c = a + b;
    a = b;
    b = c;
}
return b
}    
alert (fib(n))