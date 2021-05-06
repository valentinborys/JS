var x = 5;
var a = 1;
var b = 1;
var c;
for (let i = 3; i <= x; i++)
{
    c = b;
    b = a + b;
    a = c;
}
console.log(b);



