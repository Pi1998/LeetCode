/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let xString = x.toString()
    let leng = xString.length
    let isPalindrome = true

    for (let i = 0; i < leng / 2; i++) {
        if (xString[i] !== xString[leng - 1 - i]){
            isPalindrome = false
            break
        }
    }
    return isPalindrome
}