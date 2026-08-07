/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
   const n = distance.length;

    if (start > destination)
        [start, destination] = [destination, start];

    let prefix = new Array(n);

    prefix[0] = distance[0];

    for (let i = 1; i < n; i++) {
        prefix[i] = prefix[i - 1] + distance[i];
    }

    let clockwise;

    if (start === 0)
        clockwise = prefix[destination - 1];
    else
        clockwise = prefix[destination - 1] - prefix[start - 1];

    let total = prefix[n - 1];

    let anticlockwise = total - clockwise;

    return Math.min(clockwise, anticlockwise);

};