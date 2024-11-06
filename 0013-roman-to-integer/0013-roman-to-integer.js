/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanValues = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let romanArr = s.split("")
    let intArr = romanArr.map(char => romanValues[char]);
    let result = 0;

    for (let i=0; i < intArr.length - 1; i++){
        if(intArr[i] > intArr[i + 1] || intArr[i] == intArr[i + 1]){
            result += intArr[i]
        } else{
            result -= intArr[i]
        }
    }
    result += intArr[intArr.length - 1]
    return result
};
