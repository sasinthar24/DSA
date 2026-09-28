/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let stack = 0;
    let ans = 0;
    for(const ch of s)
    {
        if(ch == '(')
        {
            stack++;
        }
        else if(ch == ')')
        {
            stack--;
            ans = Math.max(stack+1,ans)
        }
    }
    return ans
};