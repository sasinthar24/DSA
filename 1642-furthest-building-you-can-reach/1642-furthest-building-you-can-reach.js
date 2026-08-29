/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    class MinHeap
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
            {
                break;
            }
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
            let n = this.heap.length
            while(true)
            {
                let left = 2 * index+1;
                let right = 2 * index+2;
                let best = index;
                if(left <n && !this.compare(this.heap[best],this.heap[left]))
                {
                    best = left
                }
                if(right < n && !this.compare(this.heap[best],this.heap[right]))
                {
                    best = right;
                }
                if(index == best)
                break;
                [this.heap[best],this.heap[index]] =  [this.heap[index],this.heap[best]];
                index = best; 
            }
        }
    }
    let minHeap = new MinHeap((a,b)=> a <= b);

    for(let i = 0; i < heights.length-1;i++)
    {
        let diff = heights[i+1] - heights[i]
        if(diff <= 0)
        continue;
        minHeap.push(diff);
        if(minHeap.size()>ladders)
        bricks-= minHeap.pop();
        if(bricks < 0)
        return i;
    }
    return heights.length-1
};