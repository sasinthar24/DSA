
var Twitter = function() {
    this.user = new Map();
    this.time = 0;
};

/** 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
 Twitter.prototype.createUser = function(userId) {
    if(!this.user.has(userId))
    {
        this.user.set(userId,{
            tweets:[],
            following : new Set()
        });
    }
};
Twitter.prototype.postTweet = function(userId, tweetId) {
    this.createUser(userId);
    this.user.get(userId).tweets.push([tweetId,this.time++]);
};

/** 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    if(!this.user.has(userId))
    return [];

    let tweets = [];
    tweets.push(...this.user.get(userId).tweets);
    for(const followerId of this.user.get(userId).following)
    {
         tweets.push(...this.user.get(followerId).tweets);
    }
    tweets.sort((a,b)=> b[1]-a[1])
    return tweets.splice(0,10).map(tweet=> tweet[0])
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    this.createUser(followerId);
    this.createUser(followeeId);
    if(followerId!=followeeId)
    this.user.get(followerId).following.add(followeeId)
};

/** 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    this.createUser(followerId);
    this.createUser(followeeId);

    this.user.get(followerId).following.delete(followeeId)
};

/** 
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */