/**
 * @param {string} s
 * @param {string} target
 * @return {string}
 */
var lexPalindromicPermutation = function(s, target) {
     const n = s.length;
    const freq = new Array(26).fill(0);

    for (const ch of s) {
        freq[ch.charCodeAt(0) - 97]++;
    }

    // A palindrome can have at most one character with odd frequency
    let middle = "";
    let oddCount = 0;

    for (let i = 0; i < 26; i++) {
        if (freq[i] % 2 === 1) {
            oddCount++;
            middle = String.fromCharCode(97 + i);
        }

        // We only need characters for the left half
        freq[i] = Math.floor(freq[i] / 2);
    }

    if (oddCount > 1) return "";

    const halfLength = Math.floor(n / 2);
    const half = [];

    // Try to match the first half of target
    for (let i = 0; i < halfLength; i++) {
        const index = target.charCodeAt(i) - 97;

        if (freq[index] > 0) {
            half.push(target[i]);
            freq[index]--;
        } else {
            // Cannot match target[i].
            // Try the smallest available character greater than it.
            for (let j = index + 1; j < 26; j++) {
                if (freq[j] > 0) {
                    half.push(String.fromCharCode(97 + j));
                    freq[j]--;

                    return buildPalindrome(half, middle, freq);
                }
            }

            break;
        }
    }

    // If the entire first half matched, build palindrome and check it
    if (half.length === halfLength) {
        const candidate = buildPalindrome(
            [...half],
            middle,
            [...freq]
        );

        if (candidate > target) {
            return candidate;
        }
    }

    // Go backward and try to increase an earlier character
    for (let i = half.length - 1; i >= 0; i--) {
        // Put current character back
        const oldIndex = half[i].charCodeAt(0) - 97;
        freq[oldIndex]++;

        const targetIndex = target.charCodeAt(i) - 97;

        // Find smallest character greater than target[i]
        for (let j = targetIndex + 1; j < 26; j++) {
            if (freq[j] > 0) {
                half[i] = String.fromCharCode(97 + j);
                freq[j]--;

                half.length = i + 1;

                return buildPalindrome(half, middle, freq);
            }
        }
    }

    return "";

    function buildPalindrome(left, middle, remainingFreq) {
        const result = [...left];

        // Add remaining left-half characters in sorted order
        for (let i = 0; i < 26; i++) {
            while (remainingFreq[i] > 0) {
                result.push(String.fromCharCode(97 + i));
                remainingFreq[i]--;
            }
        }

        const leftString = result.join("");
        const rightString = leftString.split("").reverse().join("");

        return leftString + middle + rightString;
    }
};