/**
 * @param {character[]} tasks
 * @param {number} n
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
var leastInterval = function(tasks, n) {
   let freq = new Map();
   for(let i=0; i < tasks.length;i++)
   {
     freq.set(tasks[i],(freq.get(tasks[i])||0)+1)
   }
   let maxHeap = new heap((a,b)=> a > b);

   for(const [key,value] of freq)
   {
    maxHeap.push(value);
   }
   let queue = [];
   let head = 0;
   let time = 0
   while(maxHeap.size()>0 || head < queue.length)
   {
    while(head < queue.length && queue[head][0] <= time)
    {
        maxHeap.push(queue[head][1])
        head++;
    }
    if(maxHeap.size()>0)
    {
        let count = maxHeap.pop()
        count--;
        if(count > 0)
        {
            queue.push([time+n+1,count]);
        }
        time++;
    }
    else
    {
        time = queue[head][0];
    }
   }
   return time;
};