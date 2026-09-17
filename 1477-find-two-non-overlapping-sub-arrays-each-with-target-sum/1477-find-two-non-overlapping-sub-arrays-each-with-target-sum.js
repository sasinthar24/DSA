/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
var minSumOfLengths = function(arr, target) {
   const n = arr.length
   const dp = new Array(n).fill(Infinity);
   let sum = 0;
   let ans = Infinity
   let left = 0;
   for(let right = 0; right < n; right++)
   {
       sum+=arr[right];
       while(sum > target)
       {
        sum-=arr[left];
        left++;
       }
       if(sum == target)
       {
          length = (right -left)+1;
          
          if(left > 0 && dp[left-1] != Infinity)
          {
            ans = Math.min(ans,length+dp[left-1]);
          }
          dp[right] = length;
       }
       if(right > 0)
       {
        dp[right] = Math.min(dp[right],dp[right-1]);
       }
   }
    return ans == Infinity? -1:ans
};