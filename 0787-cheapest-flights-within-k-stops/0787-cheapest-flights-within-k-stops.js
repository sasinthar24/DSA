/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
//  class heap
//  {
//     constructor(compare)
//     {
//         this.heap = [];
//         this.compare = compare;
//     }

//     size()
//     {
//         return this.heap.length;
//     }

//     isEmpty()
//     {
//         return this.heap.length == 0;
//     }

//     push(val)
//     {
//         this.heap.push(val)
//         this.bubbleUp();
//     }

//     bubbleUp()
//     {
//         let index = this.heap.length-1;
//         while(index > 0)
//         {
//             let parent = Math.floor((index-1)/2);
//             if(this.compare(this.heap[parent],this.heap[index]))
//             break;
//             [this.heap[parent],this.heap[index]] = [this.heap[index],this.heap[parent]];
//             index = parent;
//         }
//     }

//     pop()
//     {
//         if(this.heap.length == 0)
//         return null;

//         if(this.heap.length == 1)
//         return this.heap.pop();
//         let top = this.heap[0];
//         this.heap[0] = this.heap.pop();
//         this.bubbleDown();
//         return top;
//     }

//     bubbleDown()
//     {
//         let n = this.heap.length;
//         let index = 0;
//         while(true)
//         {
//             let left = 2 * index+1;
//             let right = 2 * index+2;
//             let best = index;
//             if(left < n && !this.compare(this.heap[best],this.heap[left]))
//             {
//                 best = left
//             }
//             if(right < n && !this.compare(this.heap[best],this.heap[right]))
//             {
//                 best = right
//             }
//             if(index == best)
//             break;

//             [this.heap[best],this.heap[index]] = [this.heap[index],this.heap[best]]
//             index = best;
//         }
//     }
//  }
var findCheapestPrice = function(n, flights, src, dst, k) {
    const graph = Array.from({length:n},()=> []);
    
    for(const [u,v,price] of flights)
    {
        graph[u].push([v,price])
    }
    const dist = new Array(n).fill(Infinity);
    dist[src] = 0;
    let queue = [];
    let head = 0;
    queue.push([0,src,0])
    while(head < queue.length)
    {
      const[currentPrice,node,stops] = queue[head++];
      
      if(stops > k)
      continue;

      for(const [nbr,price] of graph[node])
      {
        let newPrice = currentPrice+price;
        if(newPrice < dist[nbr])
        {
            dist[nbr] = newPrice
            queue.push([newPrice,nbr,stops+1])
        }
      }
    }
    return dist[dst]==Infinity?-1:dist[dst]
};