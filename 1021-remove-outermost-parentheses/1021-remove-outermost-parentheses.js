/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let ans = "";
    let stack = [];
    for(const ch of s)
    {
        if(ch == '(')
        {
            stack.push(ch)
            if(stack.length > 1)
            {
                ans+=ch
            }
        }
        else
        {
           
            if(stack.length > 1)
            {
                ans += ch
            }
             stack.pop();
        }
    }
    return ans;
};