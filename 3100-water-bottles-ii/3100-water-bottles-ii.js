/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var maxBottlesDrunk = function(numBottles, numExchange) {
     let total = numBottles;
    let empty = numBottles;

    while (empty >= numExchange) {
        empty -= numExchange;
        total++;
        empty++;
        numExchange++;
    }

    return total;
};