/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    if(n <= 998)
    return 0;
    return n - 1000 +1
};