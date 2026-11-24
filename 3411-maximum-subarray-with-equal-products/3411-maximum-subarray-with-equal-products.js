/**
 * @param {number[]} nums
 * @return {number}
 */
var maxLength = function(nums) {
      const n = nums.length;

    if (n === 1) {
        return nums[0] === 1 ? 1 : 0;
    }

    let left = 0;
    let ans = 2;

    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }

        return a;
    }

    for (let right = 0; right < n; right++) {

        let lastConflict = -1;

        // Find the latest conflicting element
        for (let i = left; i < right; i++) {
            if (gcd(nums[i], nums[right]) !== 1) {
                lastConflict = i;
            }
        }

        // Move left beyond the conflict
        left = Math.max(left, lastConflict + 1);

        ans = Math.max(ans, right - left + 1);
    }

    return ans;
};