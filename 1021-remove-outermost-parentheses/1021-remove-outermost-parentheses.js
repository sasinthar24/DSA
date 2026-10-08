/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let ans = "";
    let stack = 0;
    for(const ch of s)
    {
        if(ch == '(')
        {
            stack++;
            if(stack > 1)
            {
                ans+=ch
            }
        }
        else
        {
           
            if(stack > 1)
            {
                ans += ch
            }
             stack--;
        }
    }
    return ans;
};