/*
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let dict = {}
  for (i=0; i< s.length;i++){
    dict[s[i]] == null ? dict[s[i]] = 1 : dict[s[i]]++
  }
  
  for(item in dict)
    if (dict[item] == 1) return s.indexOf(item)
  return -1
};

var firstUniqChar = function(s) {
  let map = new Map()
  for(let c of s) {
      if(map.has(c)) {
          map.set(c,map.get(c) + 1)
      }else {
          map.set(c,1)
      }
  }
  
  for (let i=0;i<s.length;i++) {
      let c = s[i]
      if (map.get(c) == 1) return i
  }
  return -1
};