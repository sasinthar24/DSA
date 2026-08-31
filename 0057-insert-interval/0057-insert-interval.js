/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let newArray = [];
    let inserted = false;
    for(let i = 0;i < intervals.length;i++)
    {
        if(!inserted && newInterval[0] <= intervals[i][0])
        {
            newArray.push(newInterval)
            inserted = true;
        }

        newArray.push(intervals[i])
    }
    if(!inserted)
    newArray.push(newInterval)
   

    let start = newArray[0][0];
    let end = newArray[0][1];
    let ans = [];
    for(let i = 1; i < newArray.length;i++)
    {
       if(end >= newArray[i][0])
       {
        start = Math.min(start,newArray[i][0])
        end = Math.max(end,newArray[i][1])
       }
       else
       {
        ans.push([start,end])
        start = newArray[i][0]
        end = newArray[i][1]
       }
    }
    ans.push([start,end])
    return ans;
};