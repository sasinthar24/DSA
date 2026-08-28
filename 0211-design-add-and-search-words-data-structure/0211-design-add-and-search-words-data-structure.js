
var WordDictionary = function() {
    this.children = new Map();
    this.isEnd = false;
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let node = this;
    for(const ch of word)
    {
        if(!node.children.has(ch))
        {
            node.children.set(ch,new WordDictionary());
        }
        node = node.children.get(ch)
    }
    node.isEnd = true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    function dfs(index,node)
    {
       if(index === word.length)
       return node.isEnd;

       let ch = word[index];
       if(ch == '.')
       {
           for(const child of node.children.values())
           {
            if(dfs(index+1,child))
            return true;
           }
           return false;
       }
       else
       {
        if(!node.children.has(ch))
        return false;
       }
       return dfs(index+1,node.children.get(ch))
    }
   return dfs(0,this)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */