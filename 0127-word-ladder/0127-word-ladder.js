/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
    if(!wordList.includes(endWord))
    return 0;

    let set = new Set(wordList);
    let map = new Map();
    map.set(beginWord,1);
    let queue = [];
    let head = 0;
    queue.push(beginWord)

    while(head < queue.length)
    {
        const word = queue[head++];
        if(word == endWord)
        return map.get(word);
        let arr = word.split("");
        for(let i = 0; i < arr.length;i++)
        {
            let original = arr[i];
            for(let j = 97; j < (97+26);j++)
            {
                arr[i] = String.fromCharCode(j);
                let newWord = arr.join("");
                if(set.has(newWord) && !map.has(newWord))
                {
                    map.set(newWord,map.get(word)+1);
                    queue.push(newWord);
                }
            }
            arr[i] = original;
        }
        
    }
    return 0
};