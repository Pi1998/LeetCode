/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    
    strs.sort((a,b) => a.length - b.length)
    let prefix = strs.shift()

    for(let i=0; i < strs.length; i++){
        while (strs[i].indexOf(prefix) != 0){
            prefix = prefix.substring(0, prefix.length - 1);
            if(prefix === "") return "";
        }
    }
    return prefix
};
