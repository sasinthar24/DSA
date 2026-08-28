/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    let seen = new Set();
    words = words.sort((a,b)=> {
        if(a.length != b.length)
        return a.length - b.length;
        return a.localeCompare(b);
    })
    let ans = "";
    for(const word of words)
    {
        if(word.length ==1 || seen.has(word.slice(0,-1)))
        {
            seen.add(word)
             if(word.length > ans.length || (word.length == ans.length && word < ans))
             ans = word;
        }
    }
    return ans;
};