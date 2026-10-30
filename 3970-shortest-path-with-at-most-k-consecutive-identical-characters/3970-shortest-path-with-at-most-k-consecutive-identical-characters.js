/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(n, edges, labels, k) {
     if (k === 0) return -1;

    const adj = Array.from({ length: n }, () => []);

    for (const [u, v, w] of edges) {
        adj[u].push([v, w]);
    }

    // dist[node][count] = minimum cost to reach this state
    const dist = Array.from(
        { length: n },
        () => new Array(k + 1).fill(Infinity)
    );

    // Min heap: [cost, node, consecutiveCount]
    class MinHeap {
        constructor() {
            this.heap = [];
        }

        push(item) {
            const heap = this.heap;
            heap.push(item);

            let i = heap.length - 1;

            while (i > 0) {
                const p = Math.floor((i - 1) / 2);

                if (heap[p][0] <= heap[i][0]) break;

                [heap[p], heap[i]] = [heap[i], heap[p]];
                i = p;
            }
        }

        pop() {
            const heap = this.heap;
            if (heap.length === 1) return heap.pop();

            const result = heap[0];
            heap[0] = heap.pop();

            let i = 0;

            while (true) {
                let smallest = i;
                const left = 2 * i + 1;
                const right = 2 * i + 2;

                if (
                    left < heap.length &&
                    heap[left][0] < heap[smallest][0]
                ) {
                    smallest = left;
                }

                if (
                    right < heap.length &&
                    heap[right][0] < heap[smallest][0]
                ) {
                    smallest = right;
                }

                if (smallest === i) break;

                [heap[i], heap[smallest]] =
                    [heap[smallest], heap[i]];

                i = smallest;
            }

            return result;
        }

        isEmpty() {
            return this.heap.length === 0;
        }
    }

    const heap = new MinHeap();

    dist[0][1] = 0;
    heap.push([0, 0, 1]);

    while (!heap.isEmpty()) {
        const [cost, u, count] = heap.pop();

        // Skip outdated heap entries.
        if (cost !== dist[u][count]) continue;

        if (u === n - 1) return cost;

        for (const [v, weight] of adj[u]) {
            let newCount;

            if (labels[u] === labels[v]) {
                newCount = count + 1;
            } else {
                newCount = 1;
            }

            if (newCount > k) continue;

            const newCost = cost + weight;

            if (newCost < dist[v][newCount]) {
                dist[v][newCount] = newCost;
                heap.push([newCost, v, newCount]);
            }
        }
    }

    return -1;
};