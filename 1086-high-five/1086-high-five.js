/**
 * @param {number[][]} items
 * @return {number[][]}
 */
var highFive = function(items) {
    items.sort((a,b)=> {
        if(a[0] == b[0])
        return b[1] - a[1]
        return a[0] - b[0]
    });
    let map = new Map();
    for(let i = 0; i < items.length;i++)
    {
        if(!map.has(items[i][0]))
        {
            map.set(items[i][0],[])
        }
       if(map.get(items[i][0]).length < 5)
        map.get(items[i][0]).push(items[i][1])
    }
    let result = [];
    for(const [key,value] of map)
    {
        let sum = 0;
        for(let i = 0; i < 5; i++)
        {
            sum+=value[i]
        }
        result.push([key,Math.floor(sum/5)])
    }
    return result;
   
};