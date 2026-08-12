/**
 * // Definition for a _Node.
 * function _Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var flatten = function(head) {
    let dummy = new _Node(0);
    let prev = dummy;
    function dfs(node)
    {
        while(node)
        {
            let next = node.next;
            prev.next = node;
            node.prev = prev;
            prev = node;
            if(node.child)
            {
                dfs(node.child)
                node.child = null;
            }
            node = next
        }
    }
    dfs(head);
    let newHead = dummy.next;
    if(newHead)
    newHead.prev = null;
    return newHead;
};