/**
 * @param {string} s
 * @return {string}
 */
var reverseParentheses = function(s) {
    const stack = [""];
    for(const ch of s)
    {
        if(ch == "(")
        {
            stack.push("");
        }
        else if(ch == ")")
        {
            let current = stack.pop()
            let reversed = current.split('').reverse().join('')
            stack[stack.length-1]+=reversed;
        }
        else
        {
            stack[stack.length-1]+=ch
        }
    }
    return stack[0]
};