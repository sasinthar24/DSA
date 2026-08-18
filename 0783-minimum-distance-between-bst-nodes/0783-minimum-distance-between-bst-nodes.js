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
var minDiffInBST = function(root) {
    let min = Infinity;
    let values = [];
    function dfs(node)
    {
        values.push(node.val)
        if(node.left != null)
        dfs(node.left)
        if(node.right != null)
        dfs(node.right);
    }
    dfs(root);
    
    values.sort((a,b)=> a-b);
    for(let i = 1; i < values.length;i++)
    {
        min = Math.min(min,values[i]- values[i-1]);
    }
    return min;
};