/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function(a, b) {
  function lps(s)
  {
    const n = s.length;
    const lpsarr = new Array(n).fill(0);
    
    for(let i = 1; i < n; i++)
    {
        let x = lpsarr[i-1];
        while(x > 0 && s[x] != s[i])
        {
            x = lpsarr[x-1];
        }
        if(s[x] == s[i])
        x++;
        lpsarr[i] = x;
    }
    return lpsarr;
  }
  let lpsarr = lps(b);
  const n = a.length;
  const m = b.length;
  let min = Math.ceil(m/n);
  let max = (min+1)*n;
  let j = 0;
  for(let i = 0; i < max; i++)
  {
    let current = a[i % n];
    while(j > 0 && current != b[j])
    {
        j = lpsarr[j-1]
    }
    if(current == b[j])
    {
        j++;
        if(j == m)
        return Math.ceil((i+1)/n);
    }
  }
  return -1
};