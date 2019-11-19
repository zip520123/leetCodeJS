/*Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.*/
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    
  let word = strs[0]
  let res = ""
  if(strs.length < 1) return res
  
  for(i=0;i<word.length;i++){
    let char = word[i]
    for(j=1;j<strs.length;j++){
      if (strs[j][i] != char) return res
    }
    res += char
  }
  
  return res
};