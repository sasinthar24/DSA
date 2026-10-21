/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
   const n = s.length;

    // Already sorted
    let sorted = true;

    for (let i = 1; i < n; i++) {
        if (s[i] < s[i - 1]) {
            sorted = false;
            break;
        }
    }

    if (sorted) return 0;

    // Cannot sort an unsorted string of length 2
    if (n === 2) return -1;

    let minChar = 'z';
    let maxChar = 'a';
    let minCount = 0;
    let maxCount = 0;

    for (const ch of s) {
        if (ch < minChar) {
            minChar = ch;
            minCount = 1;
        } else if (ch === minChar) {
            minCount++;
        }

        if (ch > maxChar) {
            maxChar = ch;
            maxCount = 1;
        } else if (ch === maxChar) {
            maxCount++;
        }
    }

    // One operation: first character is minimum
    // OR last character is maximum
    if (s[0] === minChar || s[n - 1] === maxChar) {
        return 1;
    }

    // Both endpoints are extreme characters
    if (s[0] === maxChar && s[n - 1] === minChar) {
        // Unique maximum and unique minimum require 3 operations
        if (maxCount === 1 && minCount === 1) {
            return 3;
        }
    }

    return 2; 
};