/**
 * @param {number[][]} matrix
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
var kthSmallest = function(matrix, k) {
    if(matrix.length == 1)
    return matrix[0][0]
   let minHeap = new heap((a,b)=> a[0]<=b[0]);

   for(let i = 0; i < matrix.length;i++)
   {
    minHeap.push([matrix[i][0],i,0])
   }
   let ans;
   while(k > 0 && minHeap.size()>0)
   {
    const[val,i,j] = minHeap.pop();
    ans = val;
    if(j+1 < matrix[0].length)
    {
        
        minHeap.push([matrix[i][j+1],i,j+1])
    }
    k--
   }
   return ans;

};