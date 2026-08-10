/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isPossible = function(nums) {
    const freqMap = new Map();
    const needMap = new Map();

    for(const num of nums)
    {
        if(freqMap.has(num))
        {
            freqMap.set(num,freqMap.get(num)+1)
        }
        else
        {
            freqMap.set(num,1)
        }
    }

    for(const num of nums)
    {
       if(freqMap.get(num) == 0)
       continue;

       if((needMap.get(num)||0) > 0)
       {
            freqMap.set(num,freqMap.get(num)-1);
            needMap.set(num,needMap.get(num)-1);
            needMap.set(num+1,(needMap.get(num+1)||0)+1);
       }
       else
       {
          if((freqMap.get(num+1)||0) == 0 || (freqMap.get(num+2)||0) == 0)
          {
            return false;
          }
          freqMap.set(num,freqMap.get(num)-1);
          freqMap.set(num+1,freqMap.get(num+1)-1)
          freqMap.set(num+2,freqMap.get(num+2)-1)
          needMap.set(num+3,(needMap.get(num+3)||0)+1);
       }
    }
     return true;
};