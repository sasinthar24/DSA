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
    let head = 0
    while(head < queue.length-1)
    {
        let top = queue[head];
        head++
        let second = queue[head]
        head++;
        result[top] = deck[i];
        queue.push(second)
        i++
    }
    result[queue[head]] = deck[i];
    return result;
};