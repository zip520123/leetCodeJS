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
//brute force time O(n^2) space O(1)
var firstUniqChar = function(s) {
  let index = -1
  out:for(let i=0;i<s.length;i++){
      for(let j=0;j<s.length;j++) {
          if(s[i] == s[j] && i != j) continue out
      }
      index = i
      break
  }
  return index
}

//time O(n) space O(n) or O(26)
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

var firstUniqChar = function(s) {
  let dict = {}
  for(let c of s) {
      dict[c] = dict[c] == null ? 1 : ++dict[c]
  }
  for(let i=0;i<s.length;i++){
      if (dict[s[i]] == 1) return i
  }
  return -1
};