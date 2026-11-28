/**
 * @param {number[][]} items
 * @param {number} budget
 * @return {number}
 */
var maximumSaleItems = function(items, budget) {
     const n = items.length;
    const MAX = 1500;

    // Step 1: Find the cheapest price
    let minPrice = Infinity;

    const freq = new Array(MAX + 1).fill(0);

    for (const [factor, price] of items) {
        minPrice = Math.min(minPrice, price);
        freq[factor]++;
    }

    // Step 2: Count free-copy opportunities
    const freeCount = new Array(MAX + 1).fill(0);

    for (let factor = 1; factor <= MAX; factor++) {
        let count = 0;

        for (let multiple = factor; multiple <= MAX; multiple += factor) {
            count += freq[multiple];
        }

        freeCount[factor] = count - 1;
    }

    // Step 3: Initialize 0/1 Knapsack
    const dp0 = new Array(budget + 1).fill(-Infinity);
    const dp1 = new Array(budget + 1).fill(-Infinity);

    dp0[0] = 0;

    // Step 4: Process each item type
    for (const [factor, price] of items) {
        if (price > budget) continue;

        const value = 1 + freeCount[factor];

        for (let cost = budget; cost >= price; cost--) {

            if (price === minPrice) {
                // Selecting a cheapest-price item
                if (dp0[cost - price] !== -Infinity) {
                    dp1[cost] = Math.max(
                        dp1[cost],
                        dp0[cost - price] + value
                    );
                }
            } else {
                // Selecting a non-cheapest item
                if (dp0[cost - price] !== -Infinity) {
                    dp0[cost] = Math.max(
                        dp0[cost],
                        dp0[cost - price] + value
                    );
                }
            }

            // Already selected at least one cheapest-price item
            if (dp1[cost - price] !== -Infinity) {
                dp1[cost] = Math.max(
                    dp1[cost],
                    dp1[cost - price] + value
                );
            }
        }
    }

    // Step 5: Calculate maximum answer
    let ans = 0;

    for (let cost = 0; cost <= budget; cost++) {

        // Cheapest-price item already selected.
        // We can buy unlimited additional copies.
        if (dp1[cost] !== -Infinity) {
            const remaining = budget - cost;

            ans = Math.max(
                ans,
                dp1[cost] + Math.floor(remaining / minPrice)
            );
        }

        // No cheapest-price item selected.
        // We can only use this state if we cannot afford
        // another cheapest-price item.
        if (dp0[cost] !== -Infinity) {
            const remaining = budget - cost;

            if (remaining < minPrice) {
                ans = Math.max(ans, dp0[cost]);
            }
        }
    }

    return ans;
};