
var TimeMap = function() {
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if(this.map.has(key))
    {
        this.map.get(key).push([value,timestamp]);
    }
    else
    {
        this.map.set(key,[[value,timestamp]])
    }
    
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if(!this.map.has(key))
    return "";
    let array = this.map.get(key);
    let left = 0;
    let right = array.length-1;
    let result = "";
    while(left <= right)
    {
        let mid = Math.floor((left+right)/2)
        if(array[mid][1] <= timestamp)
        {
            result = array[mid][0]
            left = mid+1
        }
        else
        {
            right = mid-1
        }
    }
    return result;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */