let Polindrom = "Он ест сено".toString();
let x = Array.from (Polindrom.toLowerCase().replaceAll(" ","")).reverse().join("");
console.log(x)

let y = Polindrom.toLowerCase().replaceAll(" ","");

 if(x==y){
console.log("Это палиндром");
}
else console.log ("Это не палиндром")