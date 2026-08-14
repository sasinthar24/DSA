/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
    deck.sort((a,b)=> a-b);
    const n = deck.length;
    let queue = [];
    let result = [];
    for(let i =0; i < n;i++)
    {
        queue.push(i)
    }
    let i = 0;
    while(queue.length > 1)
    {
        let top = queue.shift();
        let second = queue.shift();
        result[top] = deck[i];
        queue.push(second)
        i++
    }
    result[queue.shift()] = deck[i];
    return result;
};