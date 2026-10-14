/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function(num, sum) {
     if (sum > 9 * num) return "";

    let result = "";

    for (let i = 0; i < num; i++) {
        let digit = Math.min(9, sum);
        result += digit;
        sum -= digit;
    }

    if (sum > 0) return "";

    return result;
};