/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
  let max = 0;
    let mask = 0;

    for (let bit = 30; bit >= 0; bit--) {
        mask |= (1 << bit);

        let prefixes = new Set();

        for (const num of nums) {
            prefixes.add(num & mask);
        }

        // Try setting the current bit to 1
        let candidate = max | (1 << bit);

        let found = false;

        for (const prefix of prefixes) {
            // If a XOR b = candidate
            // then b = a XOR candidate
            if (prefixes.has(prefix ^ candidate)) {
                found = true;
                break;
            }
        }

        if (found) {
            max = candidate;
        }
    }

    return max;
};