/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var countOperations = function(num1, num2) {
    let counter = 0
    while(num1 !== 0 && num2 !== 0){
        if(num1 >= num2){
            num1 = num1 - num2
            counter ++
        } else {
            num2 = num2 - num1
            counter ++
        }
    }
    return counter
};