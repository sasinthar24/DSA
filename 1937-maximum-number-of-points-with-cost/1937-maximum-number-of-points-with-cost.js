/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
  let dp = [...points[0]];
  const n = points.length;
  const m = points[0].length;

  for(let row = 1; row < n; row++)
  {
    let left = new Array(m);
    left[0] = dp[0];
    for(let c = 1; c < m;c++)
    {
        left[c] = Math.max(left[c-1]-1,dp[c])
    }
    let right = new Array(m);
    right[m-1] = dp[m-1];
    for(let c = m-2; c>=0;c--)
    {
        right[c] = Math.max(right[c+1]-1,dp[c])
    }
    console.log(left,right)
    let newDp = new Array(m);
    for(let c = 0; c < m;c++)
    {
      newDp[c] = points[row][c] + Math.max(left[c],right[c])
    }
    dp = newDp
  }

     return Math.max(...dp)
};