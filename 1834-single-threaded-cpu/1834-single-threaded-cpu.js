/**
 * @param {number[][]} tasks
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
            {
                break;
            }
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
        let n = this.heap.length;
        let index = 0;
        while(true)
        {
            let left = 2 * index +1;
            let right = 2 * index +2;
            let best = index;
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
var getOrder = function(tasks) {
    let arr = tasks.map((task,index)=> [task[0],task[1],index]);
    let minHeap = new heap((a,b)=>{
        if(a[0] != b[0])
        {
            return a[0] < b[0]
        }
        return a[1] < b[1]
    });
    arr.sort((a,b)=>
    {
        return a[0] - b[0];
    })
    let i = 0;
    let time = 0;
    let n = tasks.length
    let result = [];
    while(i < n || minHeap.size() > 0 )
    {
        if(minHeap.size() == 0 && time < arr[i][0])
        {
            time = arr[i][0];
        }

        while(i < n && arr[i][0] <= time)
        {
            minHeap.push([arr[i][1],arr[i][2]]);
            i++;
        }

        const [processingTime,index] = minHeap.pop();
        result.push(index);
        time +=processingTime;
    }
    return result
};