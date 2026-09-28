/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
    let stack = [];
    let ans = 0;
    for(const ch of s)
    {
        if(ch == '(')
        {
            stack.push(ch)
        }
        else if(ch == ')')
        {
            stack.pop();
            ans = Math.max(stack.length+1,ans)
        }
    }
    return ans
};