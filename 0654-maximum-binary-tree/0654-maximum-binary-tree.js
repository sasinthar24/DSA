/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
    function build(arr,left,right)
    {
        if(left > right)
        return null;
        let max = arr[left];
        let idx = left
        for(let i = left; i <=right; i++)
        {
            if(arr[i] > max)
            {
                max = arr[i];
                idx = i;
            }
        }

        let root = new TreeNode(max);
        root.left = build(arr,left,idx-1);
        root.right = build(arr,idx+1,right);
        return root;
    }
    return build(nums,0,nums.length-1);
};