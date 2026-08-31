/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    let pointsIndex = [];
    let prev = head;
    let curr = prev.next;
    let count = 2;
    let arr = [];
    while(curr.next!=null)
    {  
        if((curr.val > prev.val && curr.val > curr.next.val ) || (curr.val < prev.val && curr.val < curr.next.val))
        pointsIndex.push(count)
        let fwd = curr.next;
        prev = curr;
        curr = fwd;
        count++;
    }
   if(pointsIndex.length <= 1)
   return [-1,-1];
   const maxDist = pointsIndex[pointsIndex.length-1] - pointsIndex[0];
 
   let minDist = Infinity;
   for(let i = 1; i < pointsIndex.length;i++)
   {
     minDist = Math.min(minDist, pointsIndex[i] - pointsIndex[i-1])
   }
  
   return [minDist,maxDist]
};