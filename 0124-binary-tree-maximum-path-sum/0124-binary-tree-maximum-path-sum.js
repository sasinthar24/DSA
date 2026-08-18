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
var maxPathSum = function(root) {
    let max = -Infinity
    function maxSum(root)
    {
        if(root==null)
        return 0;
        let left = maxSum(root.left);
        let right = maxSum(root.right);
        
        return root.val+ Math.max(left,right,0);
    }

    function dfs(root)
    {
        if(root == null)
        return;

        let left = Math.max(0,maxSum(root.left));
        let right = Math.max(0,maxSum(root.right));
        max = Math.max(max,root.val+left+right);

        dfs(root.left);
        dfs(root.right);
    }
    dfs(root)
    return max;


};