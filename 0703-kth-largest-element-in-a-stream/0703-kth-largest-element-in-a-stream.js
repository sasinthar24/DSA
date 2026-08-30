/**
 * @param {number} k
 * @param {number[]} nums
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
        {
            return null;
        }
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
            let right = 2 * index +2;
            let best = index
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
            [this.heap[best],this.heap[index]] = [this.heap[index],this.heap[best]];
            index = best;
        }
    }
 }
var KthLargest = function(k, nums) {
     this.heap = new heap((a,b)=> a <= b);
     this.k = k;
     for(const num of nums)
     {
        this.add(num);
     }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    if(this.heap.size() < this.k || this.heap.peek() < val)
    {
        this.heap.push(val);
        if(this.heap.size()>this.k)
        this.heap.pop();
    }
    return this.heap.peek();
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */