/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var widthOfBinaryTree = function(root) {
    let width = 0;
    let queue = [];
    let head = 0;
    queue.push([root,0]);
    while(head < queue.length)
    {
         let size = queue.length-head;
         let minIndex = queue[head][1];
         let first = 0;
         let last = 0;
         for(let i = 0 ; i < size; i++)
         {
               let [node,index] = queue[head++];
               index =  index-minIndex;
               if(i == 0)
               first = index;
               if(i == size-1)
               last = index;
               if(node.left != null)
               {
                queue.push([node.left,2*index+1])
               }
               if(node.right != null)
               {
                queue.push([node.right, 2*index+2])
               }
         }
         width = Math.max(width,last-first+1)
    }
    return width;
};