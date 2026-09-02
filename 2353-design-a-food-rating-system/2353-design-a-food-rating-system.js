/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
 class heap
{
    constructor(compare)
    {
        this.heap = [];
        this.compare = compare;
    }

    size()
    {
        return this.heap.length
    }
    peek()
    {
        if(this.heap.length == 0)
        return null
        return this.heap[0]
    }
    push(val)
    {
        this.heap.push(val);
        this.bubbleUp();
    }
    bubbleUp()
    {
        let index = this.heap.length-1
        while(index >0)
        {
            let parent = Math.floor((index-1)/2)
            if(this.compare(this.heap[parent],this.heap[index]))
            break;
            [this.heap[parent],this.heap[index]] = [this.heap[index],this.heap[parent]];
            index = parent
        }
    }

    pop()
    {
        if(this.heap.length == 0)
        return null
        if(this.heap.length == 1)
        return this.heap.pop()
        let top = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown()
        return top
    }
    bubbleDown()
    {
        let index = 0;
        let n = this.heap.length
        while(true)
        {
            let left = 2 * index +1;
            let right = 2 * index +2;
            let best = index;
            if(left < n&&!this.compare(this.heap[best],this.heap[left]))
            {
                best = left
            }
            if(right < n &&!this.compare(this.heap[best],this.heap[right]))
            {
                best = right
            }
            if(index == best)
            break;
            [this.heap[best],this.heap[index]] = [this.heap[index],this.heap[best]]
            index = best;
        }
    }
}
var FoodRatings = function(foods, cuisines, ratings) {
    this.foodInfo = new Map();
    this.cuisineHeap = new Map();
    for(let i = 0 ; i < foods.length;i++)
    {
        const food = foods[i];
        const cuisine = cuisines[i];
        const rating = ratings[i];
        
        this.foodInfo.set(food,[cuisine,rating]);
        if(!this.cuisineHeap.has(cuisine))
        {
            this.cuisineHeap.set(cuisine, new heap((a,b)=>
            {
                if(a[1] != b[1])
                return a[1] > b[1]
                
                return a[0] < b[0]
            }))
        }
        this.cuisineHeap.get(cuisine).push([food,rating]);
    }
};

/** 
 * @param {string} food 
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function(food, newRating) {
   const [cuisine] = this.foodInfo.get(food);
    this.foodInfo.set(food,[cuisine,newRating]);
    this.cuisineHeap.get(cuisine).push([food,newRating]);
};

/** 
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function(cuisine) {
    let heap = this.cuisineHeap.get(cuisine)
    
    while(heap.peek()[1] != this.foodInfo.get(heap.peek()[0])[1])
    {
        heap.pop();
    }
    return heap.peek()[0];
};

/** 
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */