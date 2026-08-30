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
    let bucket = Array.from({length:nums.length+1},()=> []);

    for(const [num,freq] of map)
    {
        bucket[freq].push(num);
    }
    let result = [];
    for(freq = nums.length; freq >=1 ; freq--)
    {
       for(const num of bucket[freq])
       {
        result.push(num)
       }
       if(result.length == k)
       return result;
    }
};