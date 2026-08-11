/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let ans = 0;
    let map = new Array(26).fill(0);
    let left = 0;
    let maxFreq = 0;
    for(let right = 0; right < s.length;right++)
    {
        map[s.charCodeAt(right)-65]++;
        maxFreq = Math.max(maxFreq,map[s.charCodeAt(right)-65]);
        while(((right-left)+1)-maxFreq > k)
        {
            map[s.charCodeAt(left)-65]--
            left++;
        }
        ans = Math.max(ans,(right-left)+1);
    }
    return ans;
};