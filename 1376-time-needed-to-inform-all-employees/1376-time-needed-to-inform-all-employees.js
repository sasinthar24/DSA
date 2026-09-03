/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    let children= Array.from({length:n},()=> []);

    for(let i = 0; i < manager.length;i++)
    {
        if(manager[i] != -1)
        {
            children[manager[i]].push(i);
        }
    }

    function dfs(index)
    {
        if(children[index].length == 0)
        return 0;
        let max = 0;
        for(const child of children[index])
        {
            max = Math.max(max,dfs(child))
        }
        return max + informTime[index];
    }
    return dfs(headID)
};