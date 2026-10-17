/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
   const n = nums.length;
    const arr = [];

    
    for (let i = 0; i < n; i++) {
        let num = nums[i];
        let sum = 0;

        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        arr.push([sum, nums[i], i]);
    }

   
    arr.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return a[1] - b[1];
    });

    const visited = new Array(n).fill(false);
    let swaps = 0;

    for (let i = 0; i < n; i++) {
        if (visited[i] || arr[i][2] === i) continue;

        let cycleLength = 0;
        let j = i;

        while (!visited[j]) {
            visited[j] = true;
            j = arr[j][2];
            cycleLength++;
        }

        swaps += cycleLength - 1;
    }

    return swaps;
};