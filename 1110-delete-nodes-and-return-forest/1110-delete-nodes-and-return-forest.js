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
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
   let deleteSet = new Set(to_delete);
   let result = [];
   function dfs(node,isRoot)
   {
    if(node == null)
    return null;
    let deleted = deleteSet.has(node.val);
    if(isRoot&&!deleted)
    {
        result.push(node)
    }

    node.left = dfs(node.left,deleted);
    node.right = dfs(node.right,deleted);

    return deleted ? null:node;
   } 
   dfs(root,true);
   return result;

};