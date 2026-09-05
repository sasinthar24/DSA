/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
    let visited = new Set();
    for(let i = 0; i < deadends.length;i++)
    {
        if(deadends[i] === "0000")
        return -1;
        else
        visited.add(deadends[i]);
    }
    
    let queue = [];
    let head = 0;
    queue.push(["0000",0]);
    visited.add("0000");
    while(head < queue.length)
    {
        let temp = queue[head++];
        let lock = temp[0];
        let turns = temp[1];
        if(lock === target)
        return turns;
        for(const child of getChild(lock))
        {
            if(!visited.has(child))
            {
                queue.push([child,turns+1])
                visited.add(child);
            }
        }
    }
    return -1;

    function getChild(lock)
    {
        let res = []
        for(let i = 0; i < lock.length;i++)
        {
            let digitAdd = ((Number(lock[i])+1) % 10).toString();
            res.push(lock.substring(0,i)+digitAdd+lock.substring(i+1));
            let digitSub = ((Number(lock[i])-1 + 10)% 10).toString();
            res.push(lock.substring(0,i) + digitSub + lock.substring(i+1));
        }
        return res;
    }
};