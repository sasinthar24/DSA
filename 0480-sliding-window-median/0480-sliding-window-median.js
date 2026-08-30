/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
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
var medianSlidingWindow = function(nums, k) {
    let minHeap = new heap((a,b)=> a <= b);
    let maxHeap = new heap((a,b)=> a >= b);
    let minSize = 0;
    let maxSize = 0;
    let delayed = new Map();
  function add(num)
  {
    if(maxHeap.size() == 0 || num<= maxHeap.peek())
    {
       maxHeap.push(num)
       maxSize++;
       
    }
    else
    {
        minHeap.push(num)
        minSize++;
    }
    balance();

  }
  function balance()
  {
    if(maxSize > minSize+1)
    {
        maxSize--;
        minSize++;
        minHeap.push(maxHeap.pop());
        pruneMax();
    }
    if(minSize > maxSize)
    {
        minSize--;
        maxSize++;
        maxHeap.push(minHeap.pop());
        pruneMin();
    }
  }

 function pruneMin()
 {
    while(minHeap.size()>0)
    {
        let num = minHeap.peek();
        if(!delayed.has(num))
        break;
        delayed.set(num,delayed.get(num)-1);
        if(delayed.get(num) === 0)
        delayed.delete(num);
        minHeap.pop();
    }
 }
 function pruneMax()
 {
    while(maxHeap.size()>0)
    {
        let num = maxHeap.peek();
        if(!delayed.has(num))
        break;
        delayed.set(num,delayed.get(num)-1);
        if(delayed.get(num) == 0)
        delayed.delete(num)
        maxHeap.pop();
    }
 }
  function remove(num)
  {
      delayed.set(num,(delayed.get(num)||0)+1);
      if(num <= maxHeap.peek())
      {
        maxSize--;
        if(num == maxHeap.peek())
        pruneMax();
      }
      else
      {
        minSize--;
        if(num == minHeap.peek())
        pruneMin();
      }
      balance();
  }

let result = [];
    for(let i = 0; i < nums.length; i++)
    {

        add(nums[i]);

        if(i >= k-1)
        {
            if(k % 2 == 1)
            {
                result.push(maxHeap.peek());
            }
            else
            {
                result.push((maxHeap.peek()+minHeap.peek())/2)
            }

            remove(nums[i-k+1]);
        }
    }
    return result
};