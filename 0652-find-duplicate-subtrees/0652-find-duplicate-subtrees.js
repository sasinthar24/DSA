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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
    let map = new Map();
    let result = [];
    function dfs(node)
    {
        if(node == null)
        return "#";

        let left = dfs(node.left)
        let right = dfs(node.right);
        let key = node.val+','+left+','+right;
        let count = map.get(key)||0;
        if(count == 1)
        result.push(node);
        map.set(key,(map.get(key)||0)+1);
        return key
    }
    dfs(root)
    return result;
};