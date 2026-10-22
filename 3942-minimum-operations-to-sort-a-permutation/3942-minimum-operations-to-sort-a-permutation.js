/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
       const n = nums.length;

    // Check if nums is a rotation of [0, 1, ..., n - 1].
    let k = nums[0];
    let isForward = true;

    for (let i = 0; i < n; i++) {
        if (nums[i] !== (i + k) % n) {
            isForward = false;
            break;
        }
    }

    if (isForward) {
        // F_k: rotate sorted array left by k.
        // BFS state: [orientation, rotation]
        return bfs(0, k, n);
    }

    // Check if nums is a rotation of [n-1, ..., 1, 0].
    k = n - 1 - nums[0];

    for (let i = 0; i < n; i++) {
        const expected = n - 1 - ((i + k) % n);

        if (nums[i] !== expected) {
            return -1;
        }
    }

    // B_k: rotate reversed sorted array left by k.
    return bfs(1, k, n);
};

function bfs(orientation, k, n) {
    const dist = Array.from(
        { length: 2 },
        () => Array(n).fill(-1)
    );

    const queue = [[orientation, k]];
    dist[orientation][k] = 0;

    let head = 0;

    while (head < queue.length) {
        const [o, r] = queue[head++];
        const d = dist[o][r];

        // Target: sorted array with rotation 0.
        if (o === 0 && r === 0) {
            return d;
        }

        // Rotate left by one.
        const nextR = (r + 1) % n;

        if (dist[o][nextR] === -1) {
            dist[o][nextR] = d + 1;
            queue.push([o, nextR]);
        }

        // Reverse the entire array.
        const nextO = 1 - o;
        const reverseR = (n - r) % n;

        if (dist[nextO][reverseR] === -1) {
            dist[nextO][reverseR] = d + 1;
            queue.push([nextO, reverseR]);
        }
    }

    return -1;
};