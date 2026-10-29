/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} s
 * @param {string[]} queries
 * @return {boolean[]}
 */
var palindromePath = function(n, edges, s, queries) {
     const adj = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const parent = new Array(n).fill(-1);
    const depth = new Array(n).fill(0);
    const size = new Array(n).fill(1);
    const heavy = new Array(n).fill(-1);
    const order = [];

    // Build parent and depth iteratively.
    const stack = [0];
    parent[0] = 0;

    while (stack.length) {
        const u = stack.pop();
        order.push(u);

        for (const v of adj[u]) {
            if (v === parent[u]) continue;

            parent[v] = u;
            depth[v] = depth[u] + 1;
            stack.push(v);
        }
    }

    // Compute subtree sizes and heavy children.
    for (let i = order.length - 1; i >= 0; i--) {
        const u = order[i];
        let maxSize = 0;

        for (const v of adj[u]) {
            if (parent[v] !== u) continue;

            size[u] += size[v];

            if (size[v] > maxSize) {
                maxSize = size[v];
                heavy[u] = v;
            }
        }
    }

    const head = new Array(n);
    const pos = new Array(n);
    let timer = 0;

    // Assign HLD positions.
    const chains = [[0, 0]];

    while (chains.length) {
        const [start, chainHead] = chains.pop();

        for (let u = start; u !== -1; u = heavy[u]) {
            head[u] = chainHead;
            pos[u] = timer++;

            for (const v of adj[u]) {
                if (parent[v] === u && v !== heavy[u]) {
                    chains.push([v, v]);
                }
            }
        }
    }

    // Segment tree storing XOR masks.
    let segSize = 1;
    while (segSize < n) segSize <<= 1;

    const seg = new Int32Array(segSize * 2);

    for (let i = 0; i < n; i++) {
        seg[segSize + pos[i]] = 1 << (s.charCodeAt(i) - 97);
    }

    for (let i = segSize - 1; i > 0; i--) {
        seg[i] = seg[i * 2] ^ seg[i * 2 + 1];
    }

    function update(p, value) {
        let i = segSize + p;
        seg[i] = value;

        while (i > 1) {
            i >>= 1;
            seg[i] = seg[i * 2] ^ seg[i * 2 + 1];
        }
    }

    function rangeXor(left, right) {
        let result = 0;
        left += segSize;
        right += segSize + 1;

        while (left < right) {
            if (left & 1) result ^= seg[left++];
            if (right & 1) result ^= seg[--right];

            left >>= 1;
            right >>= 1;
        }

        return result;
    }

    function pathXor(u, v) {
        let result = 0;

        while (head[u] !== head[v]) {
            if (depth[head[u]] < depth[head[v]]) {
                [u, v] = [v, u];
            }

            result ^= rangeXor(pos[head[u]], pos[u]);
            u = parent[head[u]];
        }

        if (depth[u] > depth[v]) {
            [u, v] = [v, u];
        }

        result ^= rangeXor(pos[u], pos[v]);

        return result;
    }

    const answer = [];

    for (const q of queries) {
        const parts = q.split(" ");

        if (parts[0] === "update") {
            const u = Number(parts[1]);
            const c = parts[2];

            s = s.substring(0, u) + c + s.substring(u + 1);

            update(pos[u], 1 << (c.charCodeAt(0) - 97));
        } else {
            const u = Number(parts[1]);
            const v = Number(parts[2]);

            const mask = pathXor(u, v);

            answer.push(
                mask === 0 || (mask & (mask - 1)) === 0
            );
        }
    }

    return answer;
};