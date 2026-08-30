/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    var map = new Map();
    for(var i = 0; i < nums.length;i++)
    {
        if(map.has(nums[i]))
        {
            var freq = map.get(nums[i])
            map.set(nums[i],freq+1)
        }
        else
        {
            map.set(nums[i],1);
        }
    }
    var sortedMap = [...map.entries()]
    sortedMap.sort((a,b)=> b[1]- a[1])
    console.log(sortedMap)
    var ans = [];
    for(var i = 0; i < k;i++)
    ans.push(sortedMap[i][0])
    return ans

};