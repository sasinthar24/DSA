/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    let deque = [];
    let head = 0;
    let result = [];
    for(let i = 0; i < k;i++)
    {
        while(head < deque.length && nums[i] >= nums[deque[deque.length-1]])
        {
            deque.pop();
        }
        deque.push(i);
    }
    result.push(nums[deque[head]]);
    for(let right = k; right < nums.length;right++)
    {
        let left = right-k;
        while(head < deque.length && deque[head] == left)
        {
            head++;
        }
        while(head < deque.length && nums[right]>= nums[deque[deque.length-1]])
        {
           deque.pop();
        }
        deque.push(right);
        result.push(nums[deque[head]]);
    }
    return result;
};