/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let bracketMap = {
        ')':'(',
        ']':'[',
        '}':'{'
    };

    for(let char of s){
        if(char in bracketMap){
            if(stack.pop() !== bracketMap[char]){
                return false;
            }
        } else{
            stack.push(char);
        }
    }
    return stack.length === 0;
};