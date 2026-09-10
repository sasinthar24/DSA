/**
 * @param {number[][]} points
 * @return {number}
 */
 class heap 
 {
    constructor(compare)
    {
        this.compare = compare;
        this.heap = [];
    }

    size()
    {
        return this.heap.length;
    }
    isEmpty()
    {
        return this.heap.length == 0
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
            [this.heap[parent],this.heap[index]] = [this.heap[index],this.heap[parent]];
            index = parent;
        }
    }

    pop()
    {
        if(this.heap.length == 0)
        return null;
        if(this.heap.length == 1)
        return this.heap.pop();
        let top = this.heap[0];
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
            let left = 2 * index +1;
            let right = 2 * index+2;
            let best = index;
            if(left < n && !this.compare(this.heap[best],this.heap[left]))
            {
                best = left;
            }
            if(right < n && !this.compare(this.heap[best],this.heap[right]))
            {
                best = right
            }
            if(index == best)
            break;
            [this.heap[best],this.heap[index]] = [this.heap[index],this.heap[best]];
            index = best;
        }
    }
 }
var minCostConnectPoints = function(points) {
    let minHeap = new heap((a,b)=> a[0] <= b[0]);
    const n = points.length;
    const visited = new Array(n).fill(false);

    minHeap.push([0,0]);
    let totalCost = 0;
    let count = 0;
    while(count < n)
    {
        let temp = minHeap.pop();
        let node = temp[1];
        if(visited[node])
        continue;
        visited[node] = true;
        totalCost+=temp[0];
        count++;
        for(let i = 0; i < n ; i++)
        {
             if(visited[i])
             continue;
             let current = points[node];
             let next = points[i];
             let dis = Math.abs(current[0] - next[0]) + Math.abs(current[1] - next[1]);
             minHeap.push([dis,i]);
        }
    }
    return totalCost
};