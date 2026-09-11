/**
 * @param {number[][]} grid
 * @return {number}
 */
  class heap
 {
    constructor(compare)
    {
        this.heap = [];
        this.compare = compare;
    }

    size()
    {
        return this.heap.length;
    }

    isEmpty()
    {
        return this.heap.length == 0;
    }

    push(val)
    {
        this.heap.push(val)
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
        let n = this.heap.length;
        let index = 0;
        while(true)
        {
            let left = 2 * index+1;
            let right = 2 * index+2;
            let best = index;
            if(left < n && !this.compare(this.heap[best],this.heap[left]))
            {
                best = left
            }
            if(right < n && !this.compare(this.heap[best],this.heap[right]))
            {
                best = right
            }
            if(index == best)
            break;

            [this.heap[best],this.heap[index]] = [this.heap[index],this.heap[best]]
            index = best;
        }
    }
 }
var swimInWater = function(grid) {
    const dx = [0,1,-1,0];
    const dy = [1,0,0,-1];
    const n = grid.length
    const dist = Array.from({length:n},()=> new Array(n).fill(Infinity));
    dist[0][0] = grid[0][0];
    let minHeap = new heap((a,b)=> a[0] <= b[0]);
    minHeap.push([grid[0][0],0,0]);
    while(!minHeap.isEmpty())
    {
        let [currentTime,r,c] = minHeap.pop();
        if(currentTime > dist[r][c])
        continue;

        if(r == n-1 && c == n-1)
        return currentTime;

        for(let i = 0;i < 4;i++)
        {
            let nr = r + dx[i];
            let nc = c + dy[i];

            if(nr <0 || nr >=n || c < 0 || nc >= n)
            continue;

            let newTime = Math.max(currentTime,grid[nr][nc])
            if(newTime < dist[nr][nc])
            {
                dist[nr][nc] = newTime;
                minHeap.push([newTime,nr,nc])
            }
        }
    }


};