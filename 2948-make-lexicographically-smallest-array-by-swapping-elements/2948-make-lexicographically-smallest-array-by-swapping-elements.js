/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function(nums, limit) {
   let arr = nums.map((values,index) => [values,index]);
   arr.sort((a,b)=>a[0]-b[0]);
   let i = 0;
   let n = nums.length;
   while(i < n)
   {
    let j = i;
    while(j+1 < n && arr[j+1][0] - arr[j][0] <= limit)
    {
        j++;
    }

    let indices = [];
    for(let k = i ; k <=j; k++)
   {
    indices.push(arr[k][1]);
   }
   indices.sort((a,b)=> a-b);
   for(let k = 0; k <indices.length;k++)
   {
    nums[indices[k]] = arr[i+k][0]
   }
   i = j+1;
   }
   return nums;

};