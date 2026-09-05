/**
 * @param {number[][]} routes
 * @param {number} source
 * @param {number} target
 * @return {number}
 */
var numBusesToDestination = function(routes, source, target) {
    if(source == target)
    return 0;
    const n = routes.length;
    let stopMap = new Map();

    for(let bus = 0; bus < n ; bus++)
    {
        for(const stop of routes[bus])
        {
            if(!stopMap.has(stop))
            {
                stopMap.set(stop,[])
            }
            stopMap.get(stop).push(bus);
        }
    }
    let queue = [];
    let head = 0;
    let visited = new Array(n).fill(0);
    for(let bus of stopMap.get(source)||[])
    {
        queue.push(bus)
        visited[bus] = true;
    }
    let busTaken = 1;
    while(head < queue.length)
    {
        const size = queue.length - head;
        for(let i = 0; i < size ;i++)
        {
            const bus = queue[head++];
            for(const stop of routes[bus])
            {
                if(stop == target)
                return busTaken;

               for(const nextBus of stopMap.get(stop))
               {
                if(visited[nextBus])
                continue;
                queue.push(nextBus)
                visited[nextBus] = true;
               }
                
            }
        }
        busTaken++;
    }
      return -1
};