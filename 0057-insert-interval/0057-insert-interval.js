/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort((a,b)=> a[0] - b[0]);

    let start = intervals[0][0];
    let end = intervals[0][1];
    let ans = [];
    for(let i = 1; i < intervals.length;i++)
    {
       if(end >= intervals[i][0])
       {
        start = Math.min(start,intervals[i][0])
        end = Math.max(end,intervals[i][1])
       }
       else
       {
        ans.push([start,end])
        start = intervals[i][0]
        end = intervals[i][1]
       }
    }
    ans.push([start,end])
    return ans;
};