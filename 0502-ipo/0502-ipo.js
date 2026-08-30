/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
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
var findMaximizedCapital = function(k, w, profits, capital) {
    let arr = [];
    for(let i = 0; i < profits.length; i++)
    {
        arr.push([profits[i],capital[i]]);
    }
    arr.sort((a,b) =>
    {
        return a[1] - b[1]
    });
    let maxHeap = new heap((a,b)=> a>=b);
    let n = arr.length;
    let i = 0;
    while(k > 0)
    {
       while(i < n && arr[i][1] <= w)
       {
        maxHeap.push(arr[i][0]);
        i++;
       }
       if(maxHeap.size() == 0)
       break;

       w+= maxHeap.pop();
       k--
    }
    return w;
};