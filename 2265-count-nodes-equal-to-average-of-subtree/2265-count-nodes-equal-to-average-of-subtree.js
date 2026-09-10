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
var averageOfSubtree = function(root) {
    let ans = 0;
    function dfs(node)
    {
         let sum;
         let count;
         if(node.left == null && node.right == null)
         {
             sum = 0+node.val;
             count = 0+1;
             if(Math.floor(sum/count) == node.val)
             ans++;
            return [sum,count]
         }
         let left = [0,0];
         if(node.left!= null)
         {
            left = dfs(node.left)
         }
         let right= [0,0];
         if(node.right != null)
         {
            right = dfs(node.right)
         }
         sum = left[0] + right[0] + node.val;
         count = left[1]+right[1] + 1;
         if(Math.floor(sum/count) == node.val)
         ans++;

         return [sum,count];
    }

    dfs(root);
    return ans;
};