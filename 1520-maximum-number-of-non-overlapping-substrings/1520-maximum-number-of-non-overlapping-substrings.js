/**
 * @param {string} s
 * @return {string[]}
 */
var maxNumOfSubstrings = function(s) {
    const n = s.length;
    const firstOccurence = new Array(26).fill(n);
    const lastOccurence = new Array(26).fill(-1);
    for(let i = 0; i < n;i++)
    {
        const ch = s.charCodeAt(i)-97;
        firstOccurence[ch] = Math.min(firstOccurence[ch],i);
        lastOccurence[ch] = i
    } 
    const intervals = [];
    for(let i = 0; i < 26;i++)
    {
        if(lastOccurence[i] == -1)
        continue;
        let start = firstOccurence[i];
        let end = lastOccurence[i];
        let valid = true;
        for(let j = start; j <= end; j++)
        {
             let ch = s.charCodeAt(j) - 97;
             
             if(firstOccurence[ch] < start)
             {
                 valid = false;
                 break;
             }
             end = Math.max(end,lastOccurence[ch]);
        }
        if(valid)
        intervals.push([start,end]);
    }
   intervals.sort((a,b) => a[1] - b[1]);
   console.log(intervals)
   let lastEnd = -1;
   const result = [];
   for(const [start,end] of intervals)
   {
       if(start >lastEnd)
       {
          result.push(s.substring(start,end+1));
          lastEnd = end
       }
      
   }

   return result
};