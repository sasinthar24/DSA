/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var maxNumberOfFamilies = function(n, reservedSeats) {
    let map = new Map();
    for(const [row,col] of reservedSeats)
    {
        if(!map.has(row))
        {
            map.set(row,new Set());
        }
        map.get(row).add(col);
    }
    let count = 2 * n;
    for(const [row,col] of map)
    {
        let left = true;
        let middle = true;
        let right = true;
        for(let c = 2 ; c <= 5 ; c++)
        {
           if(col.has(c))
           left = false
        }
        for(let c = 4 ; c<=7; c++)
        {
            if(col.has(c))
            middle = false;
        }
        for(let c = 6 ; c<= 9; c++)
        {
            if(col.has(c))
            right = false
        }
        count -= 2;
        if(left && right)
        count+=2
        else if(left || middle || right)
        count+=1;
    }
    return count
    
};