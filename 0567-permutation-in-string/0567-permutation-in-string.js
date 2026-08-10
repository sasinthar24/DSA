/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let s1Freq = new Array(26).fill(0);
    let s2Freq = new Array(26).fill(0);

    const n = s1.length;
    const m = s2.length;
    for(let i = 0; i < n;i++)
    {
        s1Freq[s1.charCodeAt(i)- 97]++;
        s2Freq[s2.charCodeAt(i) - 97]++;
    }
    function isValid()
    {
        for(let i= 0; i< 26;i++)
        {
            if(s1Freq[i] != s2Freq[i])
            return false
        }
        return true;
    }
    if(isValid())
    return true;

    for(let i = n; i < m; i++)
    {
        s2Freq[s2.charCodeAt(i-n)-97]--;
        s2Freq[s2.charCodeAt(i)-97]++;
        if(isValid())
        return true;
    }
    return false;
};