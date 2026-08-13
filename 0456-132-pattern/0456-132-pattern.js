/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    let stack = [];
    let currMin = nums[0];
    for(let i = 1; i < nums.length;i++)
    {
        let n = nums[i];
        while(stack.length > 0 && n>=stack[stack.length-1][0])
        {
            stack.pop();
        }
        if(stack.length > 0 && n > stack[stack.length-1][1])
        {
            return true;
        }
        stack.push([n,currMin])
        currMin = Math.min(currMin,n);
    }
    return false;
};