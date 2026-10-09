/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let ans = 0;
    let need = 0;

    for (const ch of s) {
        if (ch === '(') {
            if (need % 2 === 1) {
                ans++;
                need--;
            }

            need += 2;
        } else {
            need--;

            if (need < 0) {
                ans++;
                need = 1;
            }
        }
    }

    return ans + need;
};