/**
 * @param {number} n
 * @return {number}
 */
var reverseBits = function(n) {
    let left = 0;
    let right = 31;
    while(left < right)
    {
        let leftbit = (n >> left)&1;
        var rightbit = (n >> right)&1;
        if(leftbit != rightbit)
        {
             n ^= (1 << left);
             n ^= (1 << right);
        }
        left++;
        right--;
    }
    return n
};