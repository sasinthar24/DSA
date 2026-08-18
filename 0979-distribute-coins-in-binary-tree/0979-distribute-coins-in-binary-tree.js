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
var distributeCoins = function(root) {
    let result = 0;
    function dfs(root)
    {
        if(root == null)
        return [0, 0];

        let left = dfs(root.left);
        let right = dfs(root.right);
        let height = 1+left[0]+right[0];
        let remCoins = root.val +left[1]+right[1];
        result+= Math.abs(height - remCoins);
        return[height,remCoins]
    }
    dfs(root)
    return result;
};