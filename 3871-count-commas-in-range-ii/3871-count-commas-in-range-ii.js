/**
 * @param {number} n
 * @return {number}
 */
var countCommas = function(n) {
    if(n < 1000)
    return 0;
    let count =0;
    if(n >= 1000)
    count += Math.min(n,999999)- 1000+1;
    if(n >= 1000000)
    count += 2 * (Math.min(n,999999999) - 1000000 +1);
    if(n >= 1000000000)
    count += 3 * (Math.min(n,999999999999) - 1000000000+1);
    if(n >= 1000000000000)
    count += 4 * (Math.min(n,999999999999999) - 1000000000000 +1)
    if(n >= 1000000000000000)
    count += 5 * (n - 1000000000000000+1)
    return count;
  
};