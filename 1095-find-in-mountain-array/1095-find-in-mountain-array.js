/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * function MountainArray() {
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 *
 *     @return {number}
 *     this.length = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {number} target
 * @param {MountainArray} mountainArr
 * @return {number}
 */
var findInMountainArray = function(target, mountainArr) {
   const n = mountainArr.length();
   let left = 0;
   let right = n-1;
   while(left < right)
   {
    let mid = Math.floor((left+right)/2);
    if(mountainArr.get(mid) > mountainArr.get(mid-1))
    {
        left = mid+1;
    }
    else
    {
        right = mid;
    }
   }
    const peak = left;

    left = 0;
    right = peak;
    while(left <= right)
    {
        let mid = Math.floor((left+right)/2);
        let value = mountainArr.get(mid);
        if(value == target)
        return mid;
        if(value < target)
        {
            left = mid+1;
        }
        else
        {
            right = mid-1
        }
    }

    left = peak;
    right = n-1;
    while(left <= right)
    {
        let mid = Math.floor((left+right)/2);
        let value = mountainArr.get(mid);
        if(value == target)
        return mid;
        if(value > target)
        {
            left = mid+1;
        }
        else
        {
            right = mid-1
        }
    }
   return -1
};