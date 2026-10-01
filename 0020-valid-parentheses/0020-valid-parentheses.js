/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];

    for(var i = 0; i < s.length;i++)
    {
        if(s[i] == '(' || s[i] == '[' || s[i] == '{')
        {
            stack.push(s[i])
        }
        else
        {
              if(stack.length == 0)
    {
        return false;
    }
           var ch = stack.pop();
           if((ch == '(' && s[i]!=')')||
              (ch == '[' && s[i]!=']')||
              (ch == '{' && s[i]!= '}'))
              {
                return false;
              }
        }
    }
    return stack.length == 0
};