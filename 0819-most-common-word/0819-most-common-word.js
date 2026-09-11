/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function(paragraph, banned) {
    let split = paragraph.toLowerCase().match(/[a-z]+/g);
    let para = [];
    for(const word of split)
        {
            let newWord = "";
            for(const ch of word)
                {
                    if(ch.toLowerCase() >= 'a' && ch.toLowerCase() <= 'z')
                        newWord+=ch.toLowerCase();
                }
            para.push(newWord);
        }
       const set = new Set(banned);
       const freqMap = new Map();
      for(const word of para)
          {
              if(set.has(word))
                  continue;
              if(freqMap.has(word))
                  {
                      let freq = freqMap.get(word)
                      freqMap.set(word,freq+1);
                  }
              else
                  {
                      freqMap.set(word,1);
                  }
          }
       let ans = "";
       let maxFreq = 0;
    for(const[word,freq] of freqMap)
        {
         if(freq > maxFreq)
            { 
                 maxFreq = freq;
                ans = word
            }   
        }
        
            return ans;
};