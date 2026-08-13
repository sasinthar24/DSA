/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) {
    let result = [];
    let stack = [];
    const n = heights.length;
    for(let i = n-1; i>=0;i--)
    {
        let visible = 0;
        while(stack.length > 0 && heights[i] > stack[stack.length-1])
        {
            visible++;
            stack.pop();
        }
        if(stack.length == 0)
        {
            result[i] = visible;
        }
        else
        {
            visible++;
            result[i] = visible;
        }
        stack.push(heights[i]);
    }
    return result;
};