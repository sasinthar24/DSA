/**
 * @param {number[]} w
 */
var Solution = function(w) {
    this.prefix = new Array(w.length);
    this.prefix[0] = w[0];
    for(let i = 1; i < w.length;i++)
    {
        this.prefix[i] = w[i] + this.prefix[i-1];
    }
    this.total = this.prefix[this.prefix.length-1];
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    let target = Math.floor(Math.random() * this.total)+1;
    for(let i = 0; i < this.prefix.length;i++)
    {
        if(this.prefix[i] >= target)
        return i;
    }
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */