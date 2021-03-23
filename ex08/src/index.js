const sum = (num1, num2) => {
   
    
    if(num2 === 0){
        num1 = num1 + 1
    }
    return num1 + num2
}

console.log(sum(4, 6));
console.log(sum(3, 0));
module.exports = sum