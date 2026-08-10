/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
    let ans = 0;
    let leftSet = new Set();
    let rightSet = new Set();
    let freqMap = new Array(26).fill(0)
    for(const ch of s)
    {
        rightSet.add(ch);
    }
    for(const ch of s)
    {
       freqMap[ch.charCodeAt(0)-97]++;
    }
    for(let right = 0; right < s.length-1;right++)
    {
        leftSet.add(s[right])
        freqMap[s[right].charCodeAt(0)-97]--;
        if(freqMap[s[right].charCodeAt(0)-97] == 0)
        rightSet.delete(s[right]);
        if(leftSet.size == rightSet.size)
        ans++;
    }
    return ans;
};