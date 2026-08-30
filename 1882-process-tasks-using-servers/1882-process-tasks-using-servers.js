/**
 * @param {number[]} servers
 * @param {number[]} tasks
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
        return this.heap[0]
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
            let left = 2 * index +1;
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

            [this.heap[best],this.heap[index]] = [this.heap[index],this.heap[best]]
            index = best;
        }
    }
 }
var assignTasks = function(servers, tasks) {
    let available = new heap((a,b)=>{
        if(a[0] != b[0])
        {
            return a[0] < b[0]
        }
        return a[1] < b[1]
    });
    let busy = new heap((a,b)=>
    {
        return a[0] < b[0];
    });

   for(let i = 0; i < servers.length;i++)
   {
    available.push([servers[i],i]);
   }
   let time = 0;
   let result = [];
   for(let i = 0; i < tasks.length;i++)
   {
    time = Math.max(time,i);
    while(busy.size() > 0 && busy.peek()[0] <= time)
    {
        const [processingTime,weight,index] = busy.pop();
        available.push([weight,index]);
    }

    while(available.size() == 0)
    {
        time = busy.peek()[0];
        while(busy.size() > 0 && busy.peek()[0] <= time)
    {
        const [processingTime,weight,index] = busy.pop();
        available.push([weight,index]);
    }
    }

    const [weight,index] = available.pop();
    result.push(index);
    busy.push([time+tasks[i],weight,index]);
   }
   return result;

};