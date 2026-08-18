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
var maxAncestorDiff = function(root) {
    function dfs(node,minValue,maxValue)
    {
        if(node == null)
        return 0;

        let ans = Math.max(Math.abs(node.val - minValue),Math.abs(node.val - maxValue));

         minValue = Math.min(minValue,node.val)
         maxValue = Math.max(maxValue,node.val);

        ans = Math.max(ans,dfs(node.left,minValue,maxValue),dfs(node.right,minValue,maxValue));
        return ans;
    }
    return dfs(root,root.val,root.val)
    
};