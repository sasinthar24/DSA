/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    
    left = 0;
    right = Math.max(...piles);
    while(left <= right)
    {
        let mid = Math.floor((left+right)/2)
        if(canEat(mid))
        {
            right = mid-1
        }
        else
        {
            left = mid+1
        }
    }
    return left;


    function canEat(x)
    {
      let hour = 0;
      for(pile of piles)
      {
        hour+= Math.ceil(pile/x);
      }
      return hour <= h;
    }
};