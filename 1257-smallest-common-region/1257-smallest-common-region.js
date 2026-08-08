/**
 * @param {string[][]} regions
 * @param {string} region1
 * @param {string} region2
 * @return {string}
 */
var findSmallestRegion = function(regions, region1, region2) {
    let parentMap = new Map();
    for(const region of regions)
    {
        let root = region[0];
        for(let i = 1; i < region.length;i++)
        {
            parentMap.set(region[i],root);
        }
    }

    let regionSet = new Set();
    while(region1 != undefined)
    {
        regionSet.add(region1)
        region1 = parentMap.get(region1)
    }

    while(!regionSet.has(region2))
    {
        region2 = parentMap.get(region2)
    }
    return region2
};