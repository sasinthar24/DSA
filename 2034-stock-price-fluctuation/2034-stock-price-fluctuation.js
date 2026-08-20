
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
            {
               break;
            }
              [this.heap[parent],this.heap[index]] = [this.heap[index],this.heap[parent]]
                index = parent;
        }
    }

    pop()
    {
        if(this.heap.length == 0)
        return null
        if(this.heap.length == 1)
        {
            return this.heap.pop();
        }
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.bubbleDown();
        return top;
    }
    bubbleDown()
    {
        let index = 0
        let n = this.heap.length;
        while(true)
        {
           let left = 2 * index+1;
           let right = 2 * index +2;
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
var StockPrice = function() {
    this.minHeap = new heap((a,b)=>a[1]<=b[1]);
    this.maxHeap = new heap((a,b)=>a[1]>=b[1]);
    this.map = new Map();
    this.latestTimeStamp = -Infinity;
};

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function(timestamp, price) {
    this.minHeap.push([timestamp,price]);
    this.maxHeap.push([timestamp,price]);
    this.map.set(timestamp,price);
    this.latestTimeStamp = Math.max(this.latestTimeStamp,timestamp);
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function() {
     return this.map.get(this.latestTimeStamp);
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function() {
    while(true)
    {
        let [timestamp,price] = this.maxHeap.peek();
        if(this.map.get(timestamp) === price)
        return price;
        this.maxHeap.pop();
    }
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function() {
     while(true) {
        let [timestamp, price] = this.minHeap.peek();

        if(this.map.get(timestamp) === price)
            return price;

        this.minHeap.pop();
    }
};

/** 
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */