class BSTNode 
{
 constructor(start,end)
 {
      this.start = start;
      this.end = end;
      this.left = null;
      this.right = null;
 }
}
 class BST
 {
    constructor()
    {
        this.root = null
    }
    insert(start,end)
    {
       const node = new BSTNode(start,end);
       if(this.root == null)
       {
        this.root = node;
        return true;
       }
       let current = this.root
       while(true)
       {
        if(end <= current.start)
        {
            if(current.left == null)
            {
                current.left = node;
                return true;
            }
            current = current.left;
        }
        else if(start >= current.end)
        {
            if(current.right == null)
            {
                current.right = node;
                return true;
            }
            current = current.right
        }
        else
        {
            return false;
        }
       }
    }

 }
var MyCalendar = function() {
  this.bst = new BST();
};

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendar.prototype.book = function(startTime, endTime) {
    
    return this.bst.insert(startTime,endTime)
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(startTime,endTime)
 */