/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function(seq) {
    const n = seq.length;
    let ans = new Array(n).fill(0);
    let stack = [];
    for(let i = 0; i < n;i++)
    {
        if(seq[i] == '(')
        {
            stack.push('(');
            ans[i] = stack.length % 2;
        }
        else
        {
            ans[i] = stack.length % 2;
            stack.pop();
        }
    }
    return ans;
};