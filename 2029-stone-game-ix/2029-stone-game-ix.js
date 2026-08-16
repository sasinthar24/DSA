/**
 * @param {number[]} stones
 * @return {boolean}
 */
var stoneGameIX = function(stones) {
   
   let count = [0,0,0];
   for(let stone of stones)
   {
    let idx = stone % 3;
    count[idx]++;
   }
   let [count0,count1,count2] = count;

    if (Math.min(count1, count2) === 0) {
        return Math.max(count1, count2) > 2 && count0 % 2 === 1;
    }

    return Math.abs(count1 - count2) > 2 || count0 % 2 === 0;
};