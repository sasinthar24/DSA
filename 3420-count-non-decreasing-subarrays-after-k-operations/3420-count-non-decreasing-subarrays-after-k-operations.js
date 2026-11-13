/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countNonDecreasingSubarrays = function(nums, k) {
   const n = nums.length;

    // 1. Find Next Greater Element
    const nge = new Array(n).fill(n);
    const stack = [];

    for (let i = n - 1; i >= 0; i--) {
        while (
            stack.length &&
            nums[stack[stack.length - 1]] <= nums[i]
        ) {
            stack.pop();
        }

        nge[i] = stack.length
            ? stack[stack.length - 1]
            : n;

        stack.push(i);
    }

    // 2. Prefix sum
    const prefix = new Array(n + 1).fill(0);

    for (let i = 0; i < n; i++) {
        prefix[i + 1] = prefix[i] + nums[i];
    }

    // 3. Binary lifting
    const LOG = Math.ceil(Math.log2(n + 1));

    const up = Array.from(
        { length: LOG + 1 },
        () => new Array(n + 1).fill(n)
    );

    const cost = Array.from(
        { length: LOG + 1 },
        () => new Array(n + 1).fill(0)
    );

    for (let i = 0; i < n; i++) {
        up[0][i] = nge[i];

        cost[0][i] =
            nums[i] * (nge[i] - i) -
            (prefix[nge[i]] - prefix[i]);
    }

    for (let j = 1; j <= LOG; j++) {
        for (let i = 0; i < n; i++) {
            const mid = up[j - 1][i];

            up[j][i] = up[j - 1][mid];

            cost[j][i] =
                cost[j - 1][i] +
                cost[j - 1][mid];
        }
    }

    // 4. Calculate cost of nums[left...right]
    function getCost(left, right) {
        let pos = left;
        let total = 0;

        for (let j = LOG; j >= 0; j--) {
            const next = up[j][pos];

            if (next <= right + 1) {
                total += cost[j][pos];
                pos = next;
            }
        }

        if (pos <= right) {
            total +=
                nums[pos] * (right - pos + 1) -
                (prefix[right + 1] - prefix[pos]);
        }

        return total;
    }

    // 5. Sliding window
    let answer = 0;
    let right = -1;

    for (let left = 0; left < n; left++) {
        while (
            right + 1 < n &&
            getCost(left, right + 1) <= k
        ) {
            right++;
        }

        answer += right - left + 1;
    }

    return answer;
};