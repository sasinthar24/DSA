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
 * @param {number} targetSum
 * @return {number[][]}
 */
var pathSum = function(root, targetSum) {
    let result = [];
    if (root == null)
        return result;

     let path = [];
    function hasPath(node,target)
    {
        if(node==null)
        return result
         path.push(node.val)
        target-= node.val
        if(!node.right && !node.left && target == 0)
        {
             result.push([...path])
             path.pop()
             return
        }
        hasPath(node.left,target)
        hasPath(node.right,target)
        path.pop()
    }
    hasPath(root,targetSum)
    return result
};