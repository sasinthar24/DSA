/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var shortestBeautifulSubstring = function(s, k) {
    let ans = "";
    let countOnes = 0;
    let left = 0;
    for(let right = 0; right < s.length;right++)
    {
        if(s[right] == 1)
        countOnes++;
        while(left <= right && s[left]==0 ||countOnes > k)
        {
            if(s[left] == 1)
            countOnes--;
            left++;
        }
        if(countOnes === k)
        {
            let current = s.substring(left,right+1);
            if(ans == "" ||current.length < ans.length|| (ans.length === current.length && current < ans))
            {
                ans = current;
            }
        }
        
    }
    return ans;
};