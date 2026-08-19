
var MyCalendar = function() {
    this.events = [];
};

/** 
 * @param {number} startTime 
 * @param {number} endTime
 * @return {boolean}
 */
MyCalendar.prototype.book = function(startTime, endTime) {
    
    for(const [start,end] of this.events)
    {
        if(start < endTime && startTime < end)
        return false
    }
    this.events.push([startTime,endTime]);
    return true;
};

/** 
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(startTime,endTime)
 */