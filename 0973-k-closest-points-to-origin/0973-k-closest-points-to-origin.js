/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    points.sort((a,b)=>
    {
        dist1 = a[0]*a[0] + a[1]*a[1]
        dist2 = b[0]*b[0] + b[1]*b[1];
        return dist1 - dist2;
    })
    let result = [];
    for(let i = 0; i < k ;i++)
    {
      result.push(points[i])
    }
    return result;
};