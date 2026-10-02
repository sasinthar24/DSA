/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var result = [];

    function backtrack(ans,open,close)
    {
        console.log(ans)
        if(ans.length == 2*n)
        {
            result.push(ans)
            return
        }
        if(open < n)
        {
            backtrack(ans+'(',open+1,close)
        }
        if(close < open)
        {
            backtrack(ans+')', open,close+1)
        }
    }
     backtrack("",0,0)
    return result;
};