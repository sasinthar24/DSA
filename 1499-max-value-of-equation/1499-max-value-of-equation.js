/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */
var findMaxValueOfEquation = function(points, k) {
    let deque = [];
    let head = 0;
    let ans = -Infinity;
    for(let j = 0; j < points.length;j++)
    {
        let x = points[j][0];
        let y = points[j][1];
        while(head < deque.length && x - points[deque[head]][0] > k )
        {
            head++;
        }
        if(head < deque.length)
        {
            ans = Math.max(ans,x+y+ points[deque[head]][1] - points[deque[head]][0]);
        }
        let current = y - x;
        while(head < deque.length && current >= points[deque[deque.length-1]][1] - points[deque[deque.length-1]][0])
        {
            deque.pop();
        }
        deque.push(j);
    }
    return ans;
};