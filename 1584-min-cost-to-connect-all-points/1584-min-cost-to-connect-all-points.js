/**
 * @param {number[][]} points
 * @return {number}
 */

var minCostConnectPoints = function(points) {
  const n = points.length;
  const visited = new Array(n).fill(false);
  const minDist = new Array(n).fill(Infinity);
  let totalCost = 0;
  minDist[0] = 0;
  for(let count = 0; count < n; count++)
  {
    let node = -1;
    for(let i = 0; i < n;i++)
    {
        if(!visited[i] && (node==-1 || minDist[i] < minDist[node]))
        node = i;
    }

    visited[node] = true;
     totalCost += minDist[node];
    for(let i = 0; i < n;i++)
    {
        if(visited[i])
        continue;
        let dis = Math.abs(points[node][0] - points[i][0])+Math.abs(points[node][1] - points[i][1])
        minDist[i] = Math.min(minDist[i], dis )
    }
  }
  return totalCost
  
};