/**
 * @param {number} cost1
 * @param {number} cost2
 * @param {number} costBoth
 * @param {number} need1
 * @param {number} need2
 * @return {number}
 */
var minimumCost = function(cost1, cost2, costBoth, need1, need2) {
    if(need1 == 0 && need2 == 0)
    return 0;

    if(costBoth <= cost1 && costBoth <= cost2)
    {
        return Math.max(need1,need2) * costBoth
    }
    let ans = 0;
    ans+=need1 * cost1;
    ans+= need2 * cost2;
    
    let common = Math.min(need1,need2);
    let mixed = (common*costBoth)+(need1-common)*cost1 + (need2-common)*cost2;

    ans = Math.min(ans,mixed);

    let allBoth = Math.max(need1,need2) * costBoth;
    ans = Math.min(ans,allBoth);
    return ans;
};