/*Given a non-empty list of words, return the k most frequent elements.

Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

Example 1:
Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
Output: ["i", "love"]
Explanation: "i" and "love" are the two most frequent words.
    Note that "i" comes before "love" due to a lower alphabetical order.
Example 2:
Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
Output: ["the", "is", "sunny", "day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
    with the number of occurrence being 4, 3, 2 and 1 respectively.
Note:
You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
Input words contain only lowercase letters.
Follow up:
Try to solve it in O(n log k) time and O(n) extra space.*/
/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  //a dict count word
  let dict = {}
  words.forEach(w=>{
    if (dict[w] == null) {
      dict[w] = 1
    } else {
      dict[w]++
    }
  })

  //sort alpha
  let res = Object.keys(dict).sort((a,b) =>{
    if (dict[a] == dict[b]) {
      return a > b ? 1 : -1
    }
    return dict[b] - dict[a]
  })
  //return res.slice(0,k)
  return res.slice(0,k)
};

/*   // dic add word
   var dic = {}
   // for in dic count
   words.forEach( w => {
     if (dic[w] == null) {
         dic[w] = 1
     } else{
       dic[w]+=1             
     }    
   })
   // sort dic
   
   var res = Object.keys(dic).sort((a,b) =>{
       if (dic[a] == dic[b]){
           return b - a
       }
       return dic[b] - dic[a]
   })

   //retun res
   return res.slice(0,k)*/