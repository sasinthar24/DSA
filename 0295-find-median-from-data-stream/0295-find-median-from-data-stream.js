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
            return null;
            return this.heap[0];
        }
        push(val)
        {
            this.heap.push(val);
            this.bubbleUp()
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
            return null
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
                let left = 2 * index+1;
                let right = 2 * index +2;
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

                [this.heap[best],this.heap[index]] = [this.heap[index],this.heap[best]];
                index = best;
            }
        }
}
var MedianFinder = function() {
    this.minHeap = new heap((a,b)=> a <= b);
    this.maxHeap = new heap((a,b)=> a >= b);
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if(this.maxHeap.size() === 0 || num <= this.maxHeap.peek())
    {
        this.maxHeap.push(num)
    }
    else
    {
        this.minHeap.push(num)
    }

    if(this.maxHeap.size()> this.minHeap.size()+1)
    {
        this.minHeap.push(this.maxHeap.pop())
    }
    if(this.minHeap.size() > this.maxHeap.size())
    {
        this.maxHeap.push(this.minHeap.pop());
    }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    if(this.maxHeap.size() > this.minHeap.size())
    {
      return this.maxHeap.peek();
    }
    else
    {
      return  (this.maxHeap.peek()+this.minHeap.peek())/2
    }
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */