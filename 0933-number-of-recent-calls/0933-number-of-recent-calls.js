
var RecentCounter = function() {
    this.queue = [];
    this.head = 0;
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
   this.queue.push(t);
   while(this.queue[this.head] < t - 3000)
   {
    this.head++;
   }
   return this.queue.length - this.head;
};



/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */