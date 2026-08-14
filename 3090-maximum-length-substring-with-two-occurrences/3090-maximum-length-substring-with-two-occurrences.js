/**
 * @param {string} s
 * @return {number}
 */
var maximumLengthSubstring = function(s) {
    let freqArray = new Array(26).fill(0);
    let ans = 0;
    let left = 0;
    for(let right = 0; right < s.length;right++)
    {
        let ch = s[right];
        let idx = ch.charCodeAt(0)-97;
        freqArray[idx]++;
        while(freqArray[idx] > 2)
        {
            let leftCh = s[left];
            let leftIdx = leftCh.charCodeAt(0)-97;
            freqArray[leftIdx]--;
            left++;
        }
        ans = Math.max(right-left+1,ans)
    }
    return ans;
};