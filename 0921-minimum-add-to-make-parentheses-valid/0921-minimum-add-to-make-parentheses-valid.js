/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let parentheses = 0;
    for(const ch of s)
    {
        if(ch == '(')
        {
            parentheses++;
        }
        else
        {
            parentheses--;
        }
    }
    return parentheses <= 0?1:parentheses
};