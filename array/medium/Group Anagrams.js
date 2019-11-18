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
var groupAnagrams = function(strs) {
  //dict
  let dict = {}
  //strs forEach w
  strs.forEach(w=>{
    // key = w.sort
    let key = w.split("").sort().join("")
  // dict[key] push w
    dict[key] == null ? dict[key] = [w] : dict[key].push(w)
  })
  //res = []
  let res = []
  //Object.keys(dict).forEach key
  Object.keys(dict).forEach(key =>{
    // res.push(dict[key])
    res.push(dict[key])
  })
  //return res
  return res
};