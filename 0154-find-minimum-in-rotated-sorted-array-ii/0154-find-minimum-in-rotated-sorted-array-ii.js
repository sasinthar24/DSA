/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {

    let ans = Infinity;
    let left = 0;
    let right = nums.length-1;
    while(left <= right)
    {
        let mid = Math.floor((left+right)/2)
        if(nums[mid] == nums[left] && nums[mid] == nums[right])
        {
              ans = Math.min(ans, nums[mid]);
            left++;
            right--;
            continue
        }

        if(nums[mid] >= nums[left])
        {
            ans = Math.min(ans,nums[left])
            left = mid+1;
        }
        else
        {
            ans = Math.min(ans,nums[mid])
            right = mid-1;
        }
    }
    return ans;
};