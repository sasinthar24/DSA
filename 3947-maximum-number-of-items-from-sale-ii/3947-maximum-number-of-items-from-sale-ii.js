/**
 * @param {number[][]} items
 * @param {number} budget
 * @return {number}
 */
var maximumSaleItems = function(items, budget) {
     const n = items.length;

    // Step 1: Count frequency of each factor
    const freq = new Array(n + 1).fill(0);

    let minPrice = Infinity;

    for (const [factor, price] of items) {
        freq[factor]++;
        minPrice = Math.min(minPrice, price);
    }

    // Step 2: Calculate free-copy opportunities
    const freeCount = new Array(n + 1).fill(0);

    for (let factor = 1; factor <= n; factor++) {
        let count = 0;

        for (let multiple = factor; multiple <= n; multiple += factor) {
            count += freq[multiple];
        }

        // Exclude the item itself
        freeCount[factor] = count - 1;
    }

    // Step 3: Sort items by price
    const sorted = items
        .map(([factor, price]) => ({
            factor,
            price,
            free: freeCount[factor]
        }))
        .sort((a, b) => a.price - b.price);

    // Step 4: Greedily buy bonus-generating copies
    let remaining = budget;
    let bonusCopies = 0;

    for (const item of sorted) {
        if (item.price >= 2 * minPrice) {
            break;
        }

        if (item.free === 0) {
            continue;
        }

        const canBuy = Math.floor(remaining / item.price);

        const take = Math.min(item.free, canBuy);

        bonusCopies += take;
        remaining -= take * item.price;
    }

    // Step 5: Spend remaining budget on cheapest items
    const normalCopies = Math.floor(remaining / minPrice);

    return 2 * bonusCopies + normalCopies;
};