/**
 * @param {number[][]} nums
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
        return null;
        return this.heap[0]
    }
    push(val)
    {
        this.heap.push(val)
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
            [this.heap[parent],this.heap[index]] = [this.heap[index],this.heap[parent]];
            index = parent
        }
    }

    pop()
    {
        if(this.heap.length == 0)
        return null
        if(this.heap.length == 1)
        return this.heap.pop();
        let top = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown()
        return top;
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
            if(left < n && !this.compare(this.heap[best],this.heap[left]))
            best = left
            if(right < n && !this.compare(this.heap[best],this.heap[right]))
            best = right
            if(index == best)
            break;
            [this.heap[best],this.heap[index]] = [this.heap[index],this.heap[best]]
            index = best;
        }
    }
 }
var smallestRange = function(nums) {
    let minHeap = new heap((a,b)=> a[0] <= b[0])
    let start = 0;
    let end = Infinity;
    let currentMax = -Infinity;
    for(let i = 0; i < nums.length;i++)
    {
        minHeap.push([nums[i][0],i,0]);
        currentMax = Math.max(currentMax,nums[i][0]);
    }
    
    while(minHeap.size() === nums.length)
    {
       const[minValue,row,col] = minHeap.pop();
       if(currentMax - minValue < end - start || (currentMax-minValue == end -start && minValue < start))
       {
        start = minValue;
        end = currentMax;
       }
       if(col+1 == nums[row].length)
       break;
       let nextValue = nums[row][col+1]
       minHeap.push([nextValue,row,col+1]);
       currentMax = Math.max(nextValue,currentMax);
    }
    return [start,end]
};