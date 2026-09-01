/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
   this.array = Array.from({length:length},()=> [[0,0]]);
   this.snapId = 0;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    let arr = this.array[index];
    if(arr[arr.length-1][0] == this.snapId)
    {
        arr[arr.length-1][1] = val
    }
    else
    {
        arr.push([this.snapId,val])
    }
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    return this.snapId++;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    let arr = this.array[index];
    let left = 0;
    let right = arr.length-1;
    while(left <=right)
    {
        let mid = Math.floor((left+right)/2);
        if(arr[mid][0] <= snap_id)
        {
            left = mid+1
        }
        else
        {
            right = mid-1;
        }
    }
    return arr[right][1]
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */