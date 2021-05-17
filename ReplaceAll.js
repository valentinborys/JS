let array = [0, 102, 101, 672, 4046, 420, 54, 10];
    for (let i = 0; i<array.length; i++){
    array[i] = array[i].toString().replaceAll("0", "-");
}
console.log(array)