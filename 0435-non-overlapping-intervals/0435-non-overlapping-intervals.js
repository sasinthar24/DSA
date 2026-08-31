/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a,b)=> {
        if(a[0] != b[0])
        {
            return a[0]-b[0]
        }
        return a[1]-b[1]
    });
    let start = intervals[0][0];
    let end = intervals[0][1];
    let count = 0;
    for(let i = 1 ;i < intervals.length;i++)
    {
        if(end > intervals[i][0])
        {
            count++;
            end = Math.min(end,intervals[i][1])
        }
        else
        {
            start = intervals[i][0];
            end = intervals[i][1];
        }
    }
    return count;
};