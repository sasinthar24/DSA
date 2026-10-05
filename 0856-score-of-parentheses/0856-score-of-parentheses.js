/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let stack = [0];

    for (let ch of s) {
        if (ch === '(') {
            stack.push(0);
        } else {
            let inner = stack.pop();
            let score = inner === 0 ? 1 : 2 * inner;
            stack[stack.length - 1] += score;
        }
    }

    return stack[0];
};