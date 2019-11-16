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
  //dict
  let dict = {}
  //for i=0; i< s.length; i++
  for (i=0; i< s.length;i++){
    // dict[s[i]]++
    dict[s[i]] == null ? dict[s[i]] = 1 : dict[s[i]]++
  }
  
  //for(item in dict)
  for(item in dict)
    if (dict[item] == 1) return s.indexOf(item)
  // if dict[item] == 1 return s.indexOf(item)
  return -1
};