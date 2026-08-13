
var RecentCounter = function() {
    this.pings = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.pings.push(t);
    let count = 0;
    for(const ping of this.pings)
    {
        if(ping >= t - 3000)
        count++;
    }
    return count;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */