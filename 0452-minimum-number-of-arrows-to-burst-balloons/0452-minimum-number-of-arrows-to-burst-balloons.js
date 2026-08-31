/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a,b)=> a[0]-b[0]);

    let start = points[0][0];
    let end = points[0][1];
    let ans = 1;
    for(let i = 1; i < points.length;i++)
    {
        if(end >= points[i][0])
        {
            start = Math.min(start,points[i][0])
            end = Math.min(end,points[i][1])
        }
        else
        {
            ans++
            start = points[i][0]
            end = points[i][1]
        }
    }

    return ans
};