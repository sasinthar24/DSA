/**
 * @param {number} n
 * @param {number} t
 * @return {number}
 */
var smallestNumber = function(n, t) {
   let i = n;
   while(true)
   {
     let num = i;
     let product = 1
     while(num > 0)
     {
        let digit = num % 10;
        product = product * digit;
        num = Math.floor(num/10);
     }
     if((product % t) == 0)
     return i
     i++
     
   }

};