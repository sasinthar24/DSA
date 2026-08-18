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
 * @return {number}
 */
var pathSum = function(root, targetSum) {
     function countFromNode(node,sum)
    {
        if(node == null)
        return 0;
        let count = 0;
        sum+=node.val
        if(sum == targetSum)
        count++;
        count+= countFromNode(node.left,sum);
        count+=countFromNode(node.right,sum);
        return count
    }

    function dfs(node)
    {
        if(node == null)
        return 0;

        let count = countFromNode(node,0);
       count+= dfs(node.left)
        count+= dfs(node.right)
        return count;
    }
    return dfs(root)
};