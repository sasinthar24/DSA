
var StockSpanner = function() {
    this.stack = [];
    this.index = 0;
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    while(this.stack.length > 0 && price >= this.stack[this.stack.length-1][0])
    {
        this.stack.pop()
    }
    let ans;
    if(this.stack.length == 0)
     ans = this.index+1;
    else
    {
        ans = this.index - this.stack[this.stack.length-1][1]
    }
    this.stack.push([price,this.index])
    this.index++;
    return ans;
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */