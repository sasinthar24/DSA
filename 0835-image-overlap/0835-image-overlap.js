/**
 * @param {number[][]} img1
 * @param {number[][]} img2
 * @return {number}
 */
var largestOverlap = function(img1, img2) {
    let ones1 = []
    let ones2 = []
    for(let r = 0; r < img1.length;r++)
    {
        for(let c = 0; c < img1.length;c++)
        {
            if(img1[r][c] == 1)
            ones1.push([r,c])
            if(img2[r][c] == 1)
            ones2.push([r,c])
        }
    }
    let map = new Map();
    ans = 0;
    for(const [r,c] of ones1)
    {
        for(const[x,y] of ones2 )
        {
           let dx = x - r;
            let dy = y - c;

            let key = dx+","+dy;
            let count = (map.get(key)||0) +1;
            ans = Math.max(ans,count);
            map.set(key,count);
        }
    }
    return ans
};