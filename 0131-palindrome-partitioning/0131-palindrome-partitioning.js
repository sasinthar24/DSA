/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    function ispaindrome(start,end)
    {
        let left = start;
        let right = end;
        while(left < right)
        {
           if(s[left] != s[right])
           return false;
           left++;
           right--;
        }
        return true
    }

    let result = [];
    let path = [];
    
    function backtrack(start)
    {
        if(start == s.length)
        {
            result.push([...path]);
            return;
        }

        for(let end = start; end < s.length;end++)
        {
            if(ispaindrome(start,end))
            {
                path.push(s.substring(start,end+1));
                backtrack(end+1);
                path.pop();
            }
        }
    }
    backtrack(0);
    return result;
};