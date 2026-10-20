/**
 * @param {number[]} nums
 * @return {number}
 */
var sortableIntegers = function(nums) {
     const n = nums.length;
    const sorted = [...nums].sort((a, b) => a - b);
    let ans = 0;

    function isRotation(block, target) {
        const k = block.length;

        // Build KMP prefix table for target.
        const lps = new Array(k).fill(0);
        for (let i = 1, len = 0; i < k;) {
            if (target[i] === target[len]) {
                lps[i++] = ++len;
            } else if (len > 0) {
                len = lps[len - 1];
            } else {
                lps[i++] = 0;
            }
        }

        // Search target inside block + block, without allocating it.
        for (let i = 0, j = 0; i < 2 * k - 1;) {
            const value = block[i % k];

            if (value === target[j]) {
                i++;
                j++;
                if (j === k) return true;
            } else if (j > 0) {
                j = lps[j - 1];
            } else {
                i++;
            }
        }

        return false;
    }

    for (let k = 1; k <= n; k++) {
        if (n % k !== 0) continue;

        let valid = true;

        for (let i = 0; i < n; i += k) {
            const block = nums.slice(i, i + k);
            const target = sorted.slice(i, i + k);

            if (!isRotation(block, target)) {
                valid = false;
                break;
            }
        }

        if (valid) ans += k;
    }

    return ans;
};