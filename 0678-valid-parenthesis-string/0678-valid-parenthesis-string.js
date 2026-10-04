/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    let open = 0;
    let close = 0;
    for(let i = 0; i < s.length;i++)
    {
        if(s[i] == '('|| s[i] == '*')
        {
            open++;
        }
        else
        {
            if(open == 0)
            return false
            else
            {
                open--;
            }
        }
    }
    for(let i = s.length-1; i>=0; i--)
    {
        if(s[i] == ')' || s[i] == '*')
        {
            close++;
        }
        else
        {
            if(close == 0)
            return false;
            else
            {
                close--;
            }
        }
    }
    return true;
};