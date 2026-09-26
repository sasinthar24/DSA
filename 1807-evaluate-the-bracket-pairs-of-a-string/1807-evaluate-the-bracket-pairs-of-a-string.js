/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
    let ans = [];
    let map = new Map();
    for(const [key,value] of knowledge)
    {
        map.set(key,value);
    }
    let flag = false;
    for(let i = 0;i < s.length;i++)
    {
        if(s[i] == '(')
        {
            let temp = [];
            i++;
            while(s[i]!=')')
            {
                temp.push(s[i]);
                i++;
            }
            ans.push(map.get(temp.join(''))||'?');
        }  
        else
        {
            ans.push(s[i]);
        }   
    }
    return ans.join('');
};