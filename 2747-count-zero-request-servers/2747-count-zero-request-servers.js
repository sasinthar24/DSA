/**
 * @param {number} n
 * @param {number[][]} logs
 * @param {number} x
 * @param {number[]} queries
 * @return {number[]}
 */
var countServers = function(n, logs, x, queries) {
    logs.sort((a,b)=> a[1]-b[1]);
    const sortedQueries = queries.map((time,index)=>[time,index]).sort((a,b)=> a[0]-b[0]);
    let ans = new Array(queries.length);

    let map = new Map();
    let left = 0;
    let right = 0;
    let activeServers = 0;
    for(const[time,index] of sortedQueries)
    {
        const startTime = time -x;
        while(right < logs.length && logs[right][1]<= time)
        {
            const server = logs[right][0];
            map.set(server,(map.get(server)||0)+1);

            if(map.get(server) == 1)
            activeServers++;
            right++;
        }

        while(left < right && logs[left][1] < startTime)
        {
            const server = logs[left][0];
              map.set(server,map.get(server)-1);
              if(map.get(server) == 0)
              {
                 activeServers--;
                 map.delete(server)
              }
             
              left++;
        }

        ans[index] = n - activeServers;
    }
    return ans;

};