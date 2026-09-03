/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
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
        return this.heap.length
    }
    peek()
    {
        if(this.heap.length == 0)
        return null
        return this.heap[0]
    }
    push(val)
    {
        this.heap.push(val);
        this.bubbleUp();
    }
    bubbleUp()
    {
        let index = this.heap.length-1
        while(index >0)
        {
            let parent = Math.floor((index-1)/2)
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
        return this.heap.pop()
        let top = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown()
        return top
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
            if(left < n&&!this.compare(this.heap[best],this.heap[left]))
            {
                best = left
            }
            if(right < n &&!this.compare(this.heap[best],this.heap[right]))
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
var minRefuelStops = function(target, startFuel, stations) {
  let prev = 0;
  let stop = 0;
  let fuel = startFuel;
  let maxHeap = new heap((a,b)=> a >= b);
  for(let i = 0; i < stations.length; i++)
  {
    const [currentPosition,currentFuel] = stations[i];
    fuel-= currentPosition - prev;
    while(fuel < 0 && maxHeap.size() > 0)
    {
        fuel+=maxHeap.pop();
        stop++;
    }
    if(fuel < 0 )
    return -1;

    maxHeap.push(currentFuel);
    prev = currentPosition;
  }
  fuel-= target-prev
  while(fuel < 0 && maxHeap.size()>0)
  {
    fuel+=maxHeap.pop();
    stop++;
  }
  return fuel >= 0 ? stop : -1;

};