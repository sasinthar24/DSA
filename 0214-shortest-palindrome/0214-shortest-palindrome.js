/**
 * @param {string} s
 * @return {string}
 */
var shortestPalindrome = function(s) {
    function lps(s)
    {
        let n = s.length;
        const lpsArray = new Array(n).fill(0);
        for(let i = 1; i < n; i++)
        {
            let x = lpsArray[i-1];
            while(x > 0 && s[x] != s[i])
            {
                x = lpsArray[x-1];
            }
            if(s[x] == s[i])
            x++;
            lpsArray[i] = x
        }
        return lpsArray;
    }

    const reversed = s.split('').reverse().join('');
    let combinedString = s + '#' + reversed;
    let lpsArray = lps(combinedString);
    let longest = lpsArray[lpsArray.length-1];
    let remain = s.substring(longest);
    remain = remain.split('').reverse().join('');
    return remain + s;
};