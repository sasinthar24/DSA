/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function(s, knowledge) {
    let ans = "";
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
            let temp = "";
            i++;
            while(s[i]!=')')
            {
                temp+=s[i];
                i++;
            }
            ans+=map.get(temp)||'?';
        }  
        else
        {
            ans+=s[i]
        }   
    }
    return ans;
};