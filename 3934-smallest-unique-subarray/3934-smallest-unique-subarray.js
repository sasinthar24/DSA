/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestUniqueSubarray = function(nums) {
   const n = nums.length;

    // Build suffix array using doubling algorithm
    function buildSuffixArray(arr) {
        const N = arr.length;
        const a = [...arr, 0]; // Unique smallest sentinel

        let maxVal = Math.max(N, ...arr);
        const count = new Array(maxVal + 1).fill(0);

        for (const x of a) count[x]++;

        for (let i = 1; i < count.length; i++) {
            count[i] += count[i - 1];
        }

        let p = new Array(N + 1);
        for (let i = N; i >= 0; i--) {
            p[--count[a[i]]] = i;
        }

        let c = new Array(N + 1);
        let classes = 1;
        c[p[0]] = 0;

        for (let i = 1; i <= N; i++) {
            if (a[p[i]] !== a[p[i - 1]]) classes++;
            c[p[i]] = classes - 1;
        }

        let h = 0;

        while ((1 << h) < N) {
            const shift = 1 << h;

            let pn = new Array(N + 1);

            for (let i = 0; i <= N; i++) {
                pn[i] = (p[i] - shift + N + 1) % (N + 1);
            }

            const cnt = new Array(classes).fill(0);

            for (const x of pn) cnt[c[x]]++;

            for (let i = 1; i < classes; i++) {
                cnt[i] += cnt[i - 1];
            }

            for (let i = N; i >= 0; i--) {
                const x = pn[i];
                p[--cnt[c[x]]] = x;
            }

            let cn = new Array(N + 1);
            let newClasses = 1;
            cn[p[0]] = 0;

            for (let i = 1; i <= N; i++) {
                const cur = [
                    c[p[i]],
                    c[(p[i] + shift) % (N + 1)]
                ];

                const prev = [
                    c[p[i - 1]],
                    c[(p[i - 1] + shift) % (N + 1)]
                ];

                if (
                    cur[0] !== prev[0] ||
                    cur[1] !== prev[1]
                ) {
                    newClasses++;
                }

                cn[p[i]] = newClasses - 1;
            }

            c = cn;
            classes = newClasses;
            h++;
        }

        return p.slice(1);
    }

    // Build LCP array using Kasai's algorithm
    function buildLCP(nums, sa) {
        const n = nums.length;
        const rank = new Array(n);

        for (let i = 0; i < n; i++) {
            rank[sa[i]] = i;
        }

        const lcp = new Array(n).fill(0);
        let k = 0;

        for (let i = 0; i < n; i++) {
            const r = rank[i];

            if (r === 0) continue;

            const j = sa[r - 1];

            while (
                i + k < n &&
                j + k < n &&
                nums[i + k] === nums[j + k]
            ) {
                k++;
            }

            lcp[r] = k;

            if (k > 0) k--;
        }

        return { lcp, rank };
    }

    const sa = buildSuffixArray(nums);
    const { lcp, rank } = buildLCP(nums, sa);

    let ans = n;

    for (let i = 0; i < n; i++) {
        const r = rank[i];

        // LCP with lexicographically previous suffix
        const left = r > 0 ? lcp[r] : 0;

        // LCP with lexicographically next suffix
        const right = r < n - 1 ? lcp[r + 1] : 0;

        const maxLCP = Math.max(left, right);

        // One more element makes this subarray unique
        const uniqueLength = maxLCP + 1;

        if (uniqueLength <= n - i) {
            ans = Math.min(ans, uniqueLength);
        }
    }

    return ans;
};