/**
 * @param {number} k
 * @param {number[]} arrival
 * @param {number[]} load
 * @return {number[]}
 */
var busiestServers = function(k, arrival, load) {
    class heap
    {
        constructor(compare)
        {
            this.compare = compare
            this.heap = [];
        }

        size()
        {
            return this.heap.length;
        }
        isEmpty()
        {
            return this.heap.length == 0;
        }
        peek()
        {
            if(this.heap.length == 0)
            return null;
            return this.heap[0];
        }
        push(val)
        {
            this.heap.push(val);
            this.bubbleUp();
        }
        bubbleUp()
        {
            let index = this.heap.length-1;
            while(index > 0)
            {
                let parent = Math.floor((index-1)/2);
                if(this.compare(this.heap[parent],this.heap[index]))
                break;
                [this.heap[parent],this.heap[index]] = [this.heap[index],this.heap[parent]]
                index = parent;
            }
        }
      
      pop()
      {
        if(this.heap.length == 0)
        return null;
        if(this.heap.length == 1)
        return this.heap.pop();

        let top = this.heap[0]
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
      }

      bubbleDown()
      {
        let index = 0;
        let n = this.heap.length;
        while(true)
        {
            let left = (2 * index)+1;
            let right = (2 * index)+2;
            let best = index;
            if(left < n && !this.compare(this.heap[best],this.heap[left]))
            {
                best = left;
            }
            if(right < n && !this.compare(this.heap[best],this.heap[right]))
            {
                best = right;
            }
            if(index == best)
            break;
            [this.heap[best],this.heap[index]]= [this.heap[index],this.heap[best]]
            index = best;
        }
      }
    }
      const count = new Array(k).fill(0);

    // Min heap: [completionTime, serverId]
    const busy = [];

    // Segment tree: stores 1 if a server is available, otherwise 0.
    const size = 1 << Math.ceil(Math.log2(k));
    const tree = new Array(size * 2).fill(0);

    // Initially, all servers are available.
    for (let i = 0; i < k; i++) {
        tree[size + i] = 1;
    }

    for (let i = size - 1; i > 0; i--) {
        tree[i] = tree[i * 2] + tree[i * 2 + 1];
    }

    function update(index, value) {
        let pos = size + index;
        tree[pos] = value;

        pos >>= 1;

        while (pos > 0) {
            tree[pos] = tree[pos * 2] + tree[pos * 2 + 1];
            pos >>= 1;
        }
    }

    // Find first available server with ID >= target.
    function findFirst(node, left, right, target) {
        if (right < target || tree[node] === 0) {
            return -1;
        }

        if (left === right) {
            return left;
        }

        const mid = Math.floor((left + right) / 2);

        let result = findFirst(node * 2, left, mid, target);

        if (result !== -1) return result;

        return findFirst(node * 2 + 1, mid + 1, right, target);
    }

    function push(item) {
        busy.push(item);

        let i = busy.length - 1;

        while (i > 0) {
            const p = Math.floor((i - 1) / 2);

            if (busy[p][0] <= busy[i][0]) break;

            [busy[p], busy[i]] = [busy[i], busy[p]];
            i = p;
        }
    }

    function pop() {
        const top = busy[0];
        const last = busy.pop();

        if (busy.length > 0) {
            busy[0] = last;

            let i = 0;

            while (true) {
                let smallest = i;
                const l = i * 2 + 1;
                const r = i * 2 + 2;

                if (l < busy.length && busy[l][0] < busy[smallest][0]) {
                    smallest = l;
                }

                if (r < busy.length && busy[r][0] < busy[smallest][0]) {
                    smallest = r;
                }

                if (smallest === i) break;

                [busy[i], busy[smallest]] = [busy[smallest], busy[i]];
                i = smallest;
            }
        }

        return top;
    }

    for (let i = 0; i < arrival.length; i++) {
        const time = arrival[i];

        // Release servers that have finished.
        while (busy.length && busy[0][0] <= time) {
            const [endTime, server] = pop();
            update(server, 1);
        }

        const preferred = i % k;

        // Find available server >= preferred.
        let server = findFirst(1, 0, size - 1, preferred);

        // Wrap around if necessary.
        if (server === -1) {
            server = findFirst(1, 0, size - 1, 0);
        }

        // All servers are busy.
        if (server === -1 || server >= k) continue;

        count[server]++;
        update(server, 0);

        push([time + load[i], server]);
    }

    const maxCount = Math.max(...count);

    return count
        .map((value, index) => value === maxCount ? index : -1)
        .filter(index => index !== -1);
};