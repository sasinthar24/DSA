/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
var minSumSquareDiff = function(nums1, nums2, k1, k2) {
    const n = nums1.length;
    let k = k1 + k2;

    const diff = new Array(n);
    let maxDiff = 0;
    let totalDiff = 0;

    for (let i = 0; i < n; i++) {
        diff[i] = Math.abs(nums1[i] - nums2[i]);
        maxDiff = Math.max(maxDiff, diff[i]);
        totalDiff += diff[i];
    }

    if (k >= totalDiff) return 0;

    let left = 0;
    let right = maxDiff;

    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        let operations = 0;

        for (const d of diff) {
            if (d > mid) operations += d - mid;
        }

        if (operations <= k) right = mid;
        else left = mid + 1;
    }

    let ans = 0;
    let remaining = k;

    for (let i = 0; i < n; i++) {
        if (diff[i] > left) {
            remaining -= diff[i] - left;
            diff[i] = left;
        }
    }

    // Use any remaining operations on positive differences.
    for (let i = 0; i < n && remaining > 0; i++) {
        if (diff[i] === left && diff[i] > 0) {
            diff[i]--;
            remaining--;
        }
    }

    for (const d of diff) {
        ans += d * d;
    }

    return ans;
};