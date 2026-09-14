/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
     let [x1,y1,x2,y2] = rec1;
     let [x3,y3,x4,y4] = rec2;
     if(x3<x2 && y3 < y2 && x1 < x4  &&
           y1 < y4 )
     return true;
     else
     return false
       return 

};