/**
 * @param {number[][]} coins
 * @param {number} k
 * @return {number}
 */
var maximumCoins = function(coins, k) {    
   coins.sort((a,b)=> a[0] - b[0])
   function solve(arr)
   {
       let ans  = 0;
       let j = 0;
       const n = arr.length;
       let sum = 0;
       for(let i = 0;  i < n;i++)
       {
        //  if (j < i) { j = i; sum = 0; }  
        let start = arr[i][0];
        let end = (start + k)-1;
       
        while(j < n && arr[j][1] <= end)
        {
            const [l,r,c] = arr[j];
            sum+=((r-l)+1)*c;
            j++;
        }
         let partial = sum;
        if(j < n && arr[j][0] <= end)
        {
            const [l,r,c] = arr[j];
            partial+=((end-l)+1)*c
        }
        
         ans = Math.max(partial,ans);
            // if(j > i)
            // {
            //     const [l,r,c] = arr[i]
            //     if(r<=end)
            //     {
            //         sum-= ((r-l)+1)*c;
            //     }
            // }
              const [l,r,c] = arr[i]
              sum-= ((r-l)+1)*c;
           
       }
        return ans;
   }

   let ans = solve(coins);
   let reversed = coins.map(([l,r,c])=>[-r,-l,c]).sort((a,b) => a[0] - b[0]);
   ans = Math.max(ans,solve(reversed))
   return ans;
    
};