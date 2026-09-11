/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {
     const result = [];
     const visited = new Array(digits.length).fill(false)
     function dfs(path)
     {
         if(path.length == 3)
         {
            result.push([...path].join(''))
            return;
         }
         for(let i = 0;i < digits.length;i++)
         {
            if(visited[i])
            continue;
            visited[i] = true
            path.push(digits[i])
            dfs(path)
            visited[i] = false
            path.pop();
         }
     }
     dfs([])
    let set = new Set(result);
    let count = 0;
    for(const num of set)
    {
        if(num[0] == 0)
        continue;

        if(Number(num) % 2 == 0)
        count++;
    }
    return count;
};