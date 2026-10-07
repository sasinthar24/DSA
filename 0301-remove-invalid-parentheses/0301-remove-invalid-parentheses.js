/**
 * @param {string} s
 * @return {string[]}
 */
var removeInvalidParentheses = function(s) {
       let leftRemove = 0;
    let rightRemove = 0;

    // Step 1: Find minimum number of '(' and ')' to remove
    for (let ch of s) {
        if (ch === '(') {
            leftRemove++;
        } 
        else if (ch === ')') {
            if (leftRemove > 0) {
                leftRemove--;
            } else {
                rightRemove++;
            }
        }
    }

    const result = new Set();

    function backtrack(index, path, balance, left, right) {

        // Invalid balance
        if (balance < 0) return;

        // Too many removals
        if (left < 0 || right < 0) return;

        // End of string
        if (index === s.length) {
            if (balance === 0 && left === 0 && right === 0) {
                result.add(path);
            }
            return;
        }

        const ch = s[index];

        // Letter → always keep
        if (ch !== '(' && ch !== ')') {
            backtrack(
                index + 1,
                path + ch,
                balance,
                left,
                right
            );
            return;
        }

        // Option 1: Remove current parenthesis
        if (ch === '(' && left > 0) {
            backtrack(
                index + 1,
                path,
                balance,
                left - 1,
                right
            );
        }

        if (ch === ')' && right > 0) {
            backtrack(
                index + 1,
                path,
                balance,
                left,
                right - 1
            );
        }

        // Option 2: Keep current parenthesis

        if (ch === '(') {
            backtrack(
                index + 1,
                path + ch,
                balance + 1,
                left,
                right
            );
        } 
        else {
            // We can keep ')' only if there is an '(' available
            if (balance > 0) {
                backtrack(
                    index + 1,
                    path + ch,
                    balance - 1,
                    left,
                    right
                );
            }
        }
    }

    backtrack(0, "", 0, leftRemove, rightRemove);

    return [...result];
};