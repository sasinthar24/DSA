/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    nums.sort((a,b)=> Math.abs(b) - Math.abs(a));
    let left = 0;
    let right = nums.length-1;
    let ans = 0;
    while(left < right)
    {
        console.log(nums[left], nums[right]);
        ans += (nums[left]**2) - (nums[right]**2); 
        left++;
        right--;
    }
    if(nums.length % 2 != 0)
    ans+= nums[left] **2
    

    return ans


    
};