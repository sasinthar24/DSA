/**
 * @param {number[]} nums
 * @return {number}
 */
var reversePairs = function(nums) {
   let count = 0;
   function merge(start,end,mid)
   {
    let p2 = mid+1;
    for(let p1 = start; p1 <= mid; p1++)
    {
        while(p2 <= end && nums[p1] > 2 * nums[p2])
        {
            p2++;
        }
        count+=p2-(mid+1);
    }
    p2 = mid+1;
    let p1 = start;
    let temp = [];
    while(p1 <= mid && p2 <= end)
    {
        if(nums[p1] < nums[p2])
        {
            temp.push(nums[p1])
            p1++;
        }
        else
        {
            temp.push(nums[p2]);
            p2++;
        }
    }
    while(p1 <= mid)
    {
        temp.push(nums[p1])
        p1++;
    }
    while(p2 <= end)
    {
        temp.push(nums[p2])
        p2++;
    }
    for(let i = 0 ;i < temp.length;i++)
    {
        nums[start+i] = temp[i];
    }
   }

   function mergeSort(start,end)
   {
    if(start >= end)
    return;

    let mid = Math.floor((start+end)/2);
    mergeSort(start,mid)
    mergeSort(mid+1,end)
    merge(start,end,mid);
   }
   mergeSort(0,nums.length-1)
   return count;
};