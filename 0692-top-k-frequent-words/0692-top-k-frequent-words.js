/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let result = [];
    let map = new Map();
    for(const word of words)
    {
        map.set(word,(map.get(word)||0)+1);
    }

    let sortedMap = [...map.entries()]
    .sort((a,b)=>{
        if(a[1] == b[1])
        return a[0].localeCompare(b[0]);
        return b[1] - a[1];
    }).map(([keys])=> keys)
    for(let i = 0; i < k;i++)
    {
        result.push(sortedMap[i])
    }
    return result;
};