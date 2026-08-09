/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string} word
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} words
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function(words, master) {
   function match(a,b)
   {
    let count =0;
    for(let i = 0; i<6;i++)
    {
        if(a[i] == b[i])
        count++
    }
    return count;
   }

   let candidates = words;
   while(candidates.length>0)
   {
    let random = Math.floor(Math.random()*candidates.length);
    let guessedword = candidates[random];
    let matches = master.guess(guessedword);
    if(matches === 6)
    return;
    let next = [];
    for(const word of candidates)
    {
        if(match(word,guessedword) == matches)
        {
            next.push(word)
        }
    }
    candidates = next;
   }
};