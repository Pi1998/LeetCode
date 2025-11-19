/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function(bits) {
    let i = 0;                    
    let lastIndex = bits.length - 1;

    while (i < lastIndex) {        
        if (bits[i] === 0) {
            i += 1;            
        } else {
            i += 2;  
        }
    }

    return i === lastIndex;

};