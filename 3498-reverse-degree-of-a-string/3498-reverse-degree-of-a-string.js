/**
 * @param {string} s
 * @return {number}
 */
var reverseDegree = function(s) {
    let total = 0;
    for(let i = 0; i < s.length;i++)
    {
        total += (26 - (s.charCodeAt(i)-97)) * (i+1)
    }
    return total
};