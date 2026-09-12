/**
 * @param {number[][]} envelopes
 * @return {number}
 */
var maxEnvelopes = function(envelopes) {
  envelopes.sort((a,b)=>
  {
    if(a[0] == b[0])
    return b[1] - a[1];

    return a[0] - b[0];
  });

  let lis = [];
  for(let i =0; i < envelopes.length;i++)
  {
    let height = envelopes[i][1];
    let left = 0;
    let right = lis.length;
    while(left < right)
    {
        let mid = Math.floor((left+right)/2);

        if(lis[mid] < height)
        {
            left = mid+1
        }
        else
        {
            right = mid;
        }
    }
    lis[left] = height;
  }
  return lis.length
};