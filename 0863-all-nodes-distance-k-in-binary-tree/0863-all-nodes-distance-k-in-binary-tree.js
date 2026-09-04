/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    let parentMap = new Map();
    let queue = [];
    let head = 0;
    queue.push(root)
    parentMap.set(root,null);
    while(head < queue.length)
    {
        let currentNode = queue[head];
        head++;
        if(currentNode.left != null)
        {
            parentMap.set(currentNode.left,currentNode);
            queue.push(currentNode.left)
        }
        if(currentNode.right != null)
        {
            parentMap.set(currentNode.right,currentNode)
            queue.push(currentNode.right)
        }
    }
    
   let searchQueue = [];
   searchHead = 0;
   let visited = new Set();
   searchQueue.push(target);
   visited.add(target);
   let dist = 0;
   let result = [];
   while(searchHead < searchQueue.length)
   {
    if(dist == k)
    {
       for(let i = searchHead;i < searchQueue.length;i++)
       {
        result.push(searchQueue[i].val)
       }
       break;
    }
    let size = searchQueue.length - searchHead;
    for(let i = 0 ; i < size; i++)
    {
       let currentNode = searchQueue[searchHead++];
       let parent = parentMap.get(currentNode)
       if(parent != null && !visited.has(parent))
       {
        visited.add(parent)
        searchQueue.push(parent);
       }
      if(currentNode.left != null && !visited.has(currentNode.left))
       {
        visited.add(currentNode.left)
        searchQueue.push(currentNode.left);
       }
       if(currentNode.right != null && !visited.has(currentNode.right))
       {
        visited.add(currentNode.right)
        searchQueue.push(currentNode.right);
       }
    }
   dist++;   
   }

return result;
};