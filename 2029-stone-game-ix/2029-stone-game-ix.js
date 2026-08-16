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

    if(count0 % 2 == 0)
    {
        return count1 > 0 && count2 >0
    }

    return Math.abs(count1 - count2) > 2 ;
};