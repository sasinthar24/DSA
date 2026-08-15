/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function(s) {
    let map = new Map();
    for(const ch of s)
    {
        map.set(ch,(map.get(ch)||0)+1);
    }
    let sortedMap = [...map.entries()].sort((a,b)=> b[1] - a[1]).map(([key,values]) => [key,values]);
    let result="";
    for(const [ch,len] of sortedMap)
    {
        for(let i = 0; i < len; i++)
        {
            result+=ch;
        }
    }
    return result;
};