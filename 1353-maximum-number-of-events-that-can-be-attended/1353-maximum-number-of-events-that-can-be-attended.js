/**
 * @param {number[][]} events
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

    peek()
    {
        if(this.heap.length == 0)
        return null
        return this.heap[0]
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
        return null
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
            let left = 2 * index +1;
            let right = 2 * index +2;
            let best = index;
            if(left < n && !this.compare(this.heap[best],this.heap[left]))
            {
                best = left
            }
            if(right <n && !this.compare(this.heap[best],this.heap[right]))
            {
                best = right;
            }
            if(index == best)
            break;
            [this.heap[best],this.heap[index]] = [this.heap[index],this.heap[best]]
            index = best;
        }
    }
 }
var maxEvents = function(events) {
   let minHeap = new heap((a,b)=> a<=b);
   let i = 0;
   let day = 0;
   let count = 0;
   let n = events.length;
   events.sort((a,b)=> a[0]-b[0]);
   while(i < n || minHeap.size()>0)
   {
     if(i < n && minHeap.size() == 0)
     {
        day = events[i][0]
     }

     while(i < n && events[i][0] <= day)
     {
        minHeap.push(events[i][1])
        i++;
     }
     while(minHeap.size()>0 && minHeap.peek() < day )
     {
        minHeap.pop()
     }
     if(minHeap.size()>0)
     {
        minHeap.pop();
        day++;
        count++;
     }
   }
   return count;
};