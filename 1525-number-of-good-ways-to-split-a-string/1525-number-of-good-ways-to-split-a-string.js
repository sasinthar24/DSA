/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
    let ans = 0;
    let leftSet = new Set();
    let rightSet = new Set();
    let freqMap = new Map();
    for(const ch of s)
    {
        rightSet.add(ch);
    }
    for(const ch of s)
    {
        if(freqMap.has(ch))
        {
            freqMap.set(ch,freqMap.get(ch)+1)
        }
        else
        {
            freqMap.set(ch,1);
        }
    }
    for(let right = 0; right < s.length-1;right++)
    {
        leftSet.add(s[right])
        freqMap.set(s[right],freqMap.get(s[right])-1);
        if(freqMap.get(s[right]) == 0)
        rightSet.delete(s[right]);
        if(leftSet.size == rightSet.size)
        ans++;
    }
    return ans;
};