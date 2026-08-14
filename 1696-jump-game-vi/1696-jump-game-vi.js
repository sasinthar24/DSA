/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxResult = function(nums, k) {
    const n = nums.length;
    const dp = new Array(n).fill(0);
    let deque = [];
    dp[n-1] = nums[n-1];
    let head = 0;
    deque.push(n-1)
    for(let i = n-2; i>=0;i--)
    {
      while(head < deque.length && deque[head] > i+k)
      {
        head++;
      }
      dp[i] = nums[i]+dp[deque[head]];
      while(head < deque.length && dp[i] >= dp[deque[deque.length-1]])
      {
        deque.pop();
      }
      deque.push(i)
    }
    return dp[0]
};