/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
  while(s.length > k)
  {
     s = splitGroups(s);
  }
  return s
    function splitGroups(str)
    {
        let newArray = str.split('');
        let result = "";
        for(let i = 0; i < newArray.length; i+=k)
        {
            let arr = 0;
            for(let j = i ;j < newArray.length && j < i+k; j++)
            {
                arr+=Number(newArray[j])
            }
            result+=arr;
        }
        return result;
    }


};