
var MyCalendarTwo = function() {
    this.events = [];
    this.overlaps = [];
};

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(startTime, endTime) {
    for(const [start,end] of this.overlaps)
    {
        if(startTime < end && start < endTime)
        return false;
    }

    for(const [start,end] of this.events)
    {
        let left = Math.max(start,startTime)
        let right = Math.min(end,endTime);
        if(left < right)
        this.overlaps.push([left,right]);
    }
    this.events.push([startTime,endTime])
    return true;
};


/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(startTime,endTime)
 */