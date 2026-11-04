/**
 * @param {number[]} nums
 * @param {number} x
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, x, k) {
     const n = nums.length;
    const costs = new Array(n - x + 1);

    // Calculate median costs for all windows of length x.
    const median = new SlidingMedian();

    for (let i = 0; i < n; i++) {
        median.add(nums[i]);

        if (i >= x) {
            median.remove(nums[i - x]);
        }

        if (i >= x - 1) {
            costs[i - x + 1] = median.getCost();
        }
    }

    // dp[i][j] = minimum cost using exactly j windows
    // among the first i elements.
    const dp = Array.from(
        { length: n + 1 },
        () => new Array(k + 1).fill(Infinity)
    );

    for (let i = 0; i <= n; i++) {
        dp[i][0] = 0;
    }

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= k; j++) {
            // Skip nums[i - 1].
            dp[i][j] = dp[i - 1][j];

            // Select a window ending at i - 1.
            if (i >= x && j <= Math.floor(i / x)) {
                dp[i][j] = Math.min(
                    dp[i][j],
                    dp[i - x][j - 1] + costs[i - x]
                );
            }
        }
    }

    return dp[n][k];
};

class heap {
    constructor(compare) {
        this.data = [];
        this.compare = compare;
    }

    size() {
        return this.data.length;
    }

    peek() {
        return this.data[0];
    }

    push(value) {
        const a = this.data;
        a.push(value);

        let i = a.length - 1;

        while (i > 0) {
            const p = Math.floor((i - 1) / 2);

            if (!this.compare(a[i], a[p])) break;

            [a[i], a[p]] = [a[p], a[i]];
            i = p;
        }
    }

    pop() {
        const a = this.data;
        if (a.length === 0) return undefined;

        const top = a[0];
        const last = a.pop();

        if (a.length > 0) {
            a[0] = last;
            let i = 0;

            while (true) {
                let best = i;
                const l = 2 * i + 1;
                const r = 2 * i + 2;

                if (l < a.length && this.compare(a[l], a[best])) {
                    best = l;
                }

                if (r < a.length && this.compare(a[r], a[best])) {
                    best = r;
                }

                if (best === i) break;

                [a[i], a[best]] = [a[best], a[i]];
                i = best;
            }
        }

        return top;
    }
}

class SlidingMedian {
    constructor() {
        // Max-heap for lower half; min-heap for upper half.
        this.low = new heap((a, b) => a > b);
        this.high = new heap((a, b) => a < b);

        this.delayed = new Map();
        this.lowSize = 0;
        this.highSize = 0;
        this.lowSum = 0;
        this.highSum = 0;
    }

    prune(heap) {
        while (heap.size() > 0) {
            const value = heap.peek();
            const count = this.delayed.get(value) || 0;

            if (count === 0) break;

            heap.pop();

            if (count === 1) {
                this.delayed.delete(value);
            } else {
                this.delayed.set(value, count - 1);
            }
        }
    }

    rebalance() {
        if (this.lowSize > this.highSize + 1) {
            this.prune(this.low);

            const value = this.low.pop();
            this.lowSum -= value;
            this.lowSize--;

            this.high.push(value);
            this.highSum += value;
            this.highSize++;

            this.prune(this.low);
        } else if (this.lowSize < this.highSize) {
            this.prune(this.high);

            const value = this.high.pop();
            this.highSum -= value;
            this.highSize--;

            this.low.push(value);
            this.lowSum += value;
            this.lowSize++;

            this.prune(this.high);
        }
    }

    add(value) {
        this.prune(this.low);

        if (this.lowSize === 0 || value <= this.low.peek()) {
            this.low.push(value);
            this.lowSize++;
            this.lowSum += value;
        } else {
            this.high.push(value);
            this.highSize++;
            this.highSum += value;
        }

        this.rebalance();
    }

    remove(value) {
        this.prune(this.low);
        this.prune(this.high);

        this.delayed.set(
            value,
            (this.delayed.get(value) || 0) + 1
        );

        if (value <= this.low.peek()) {
            this.lowSize--;
            this.lowSum -= value;

            if (value === this.low.peek()) {
                this.prune(this.low);
            }
        } else {
            this.highSize--;
            this.highSum -= value;

            if (value === this.high.peek()) {
                this.prune(this.high);
            }
        }

        this.rebalance();
    }

    getCost() {
        this.prune(this.low);
        this.prune(this.high);

        const med = this.low.peek();

        return med * this.lowSize - this.lowSum
             + this.highSum - med * this.highSize;
    }
};