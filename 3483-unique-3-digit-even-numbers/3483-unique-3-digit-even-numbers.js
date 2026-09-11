/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function(digits) {
    let set = new Set();
    for(let i = 0; i < digits.length;i++)
    {
        if(digits[i] == 0)
        continue;
        for(let j = 0; j < digits.length;j++)
        {
            if(i == j)
            continue;
            for(let k = 0; k < digits.length;k++)
            {
                if(i == k || j == k)
                continue;

                if(digits[k]% 2 != 0)
                continue;

                let num = digits[i]*100+digits[j]*10+digits[k]
                set.add(num)
            }
        }
    }
    return set.size
};