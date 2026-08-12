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
  var curr = head;

    while (curr !== null) {
        if (curr.child !== null) {
            var next = curr.next; // save the current next

            // Find the tail of the child chain
            var tail = curr.child;
            while (tail.next !== null) {
                tail = tail.next;
            }

            // Splice child chain between curr and next
            curr.next = curr.child;
            curr.child.prev = curr;
            tail.next = next;
            if (next !== null) {
                next.prev = tail;
            }

            // Clear the child pointer
            curr.child = null;
        }
        curr = curr.next;
    }

    return head;
};