/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
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
        return this.heap.length
    }
    peek()
    {
        if(this.heap.length == 0)
        return null
        return this.heap[0]
    }
    push(val)
    {
        this.heap.push(val);
        this.bubbleUp();
    }
    bubbleUp()
    {
        let index = this.heap.length-1
        while(index >0)
        {
            let parent = Math.floor((index-1)/2)
            if(this.compare(this.heap[parent],this.heap[index]))
            break;
            [this.heap[parent],this.heap[index]] = [this.heap[index],this.heap[parent]];
            index = parent
        }
    }

    pop()
    {
        if(this.heap.length == 0)
        return null
        if(this.heap.length == 1)
        return this.heap.pop()
        let top = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown()
        return top
    }
    bubbleDown()
    {
        let index = 0;
        let n = this.heap.length
        while(true)
        {
            let left = 2 * index +1;
            let right = 2 * index +2;
            let best = index;
            if(left < n&&!this.compare(this.heap[best],this.heap[left]))
            {
                best = left
            }
            if(right < n &&!this.compare(this.heap[best],this.heap[right]))
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
var mincostToHireWorkers = function(quality, wage, k) {
    let workers = [];
    let n = quality.length
    for(let i = 0; i < n; i++)
    {
        workers.push([wage[i]/quality[i], quality[i]])
    }
    workers.sort((a,b)=> a[0] - b[0])
    let maxHeap = new heap((a,b)=> a >= b)
    let qualitySum = 0;
    let ans = Infinity;
    for(const [ratio , q] of workers)
    {
       qualitySum+=q;
       maxHeap.push(q);
       if(maxHeap.size() > k)
       {
         qualitySum-=maxHeap.pop()
       }
       if(maxHeap.size() == k)
       ans = Math.min(ans,qualitySum * ratio)
    }
    return ans;
};