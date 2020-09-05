/*Given an array of strings, group anagrams together.

Example:

Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
Output:
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
Note:

All inputs will be in lowercase.
The order of your output does not matter.*/

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

//time O(N KlogK) space O(N)
var groupAnagrams = function(strs) {
  let dict = {}
  strs.forEach(w=>{
    let key = w.split("").sort().join("")
    dict[key] == null ? dict[key] = [w] : dict[key].push(w)
  })
  let res = []
  Object.keys(dict).forEach(key =>{
    res.push(dict[key])
  })
  return res
};

var groupAnagrams = function(strs) {
  let map = new Map()
  for (let str of strs) {
      let arr = str.split("")
      arr.sort((a,b)=>{
          return a.charCodeAt() - b.charCodeAt()
      })
      let key = arr.join("")
      if(map.has(key)) {
          map.get(key).push(str)
      } else{
          map.set(key,[str])
      }
  }
  let res = []
  for(let [key, value] of map) {
      res.push(value)
  }
  return res
};