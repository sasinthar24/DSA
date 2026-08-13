/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    const n = nums2.length;
    let nextGreater = new Array(n).fill(-1);
    for(let i = n-1; i>= 0; i--)
    {
        while(stack.length > 0 && nums2[i] > stack[stack.length-1])
        {
            stack.pop();
        }
        if(stack.length == 0)
        {
            nextGreater[i] = -1;
        }
        else
        {
            nextGreater[i] = stack[stack.length-1];
        }
        stack.push(nums2[i])
    }
    let result = [];
    for(let i = 0; i < nums1.length;i++)
    {
        let idx = nums2.indexOf(nums1[i]);
        result.push(nextGreater[idx]);
    }
    return result;
};