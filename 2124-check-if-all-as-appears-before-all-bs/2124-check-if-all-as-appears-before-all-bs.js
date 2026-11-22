/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
    let countA = 0;
    let countB = 0;

    for(const char of s)
    {
        if(char == 'a')
        countA++;
        else
        countB++;
    }
    if(countA == 0)
    return true;

    for(const char of s)
    {
        if(countA > 0 && char == 'a' )
        {
            countA--;
        }
        else if(countA == 0)
        return true;
        else
        return false;
    }
    return true;
    
};