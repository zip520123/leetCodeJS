/*Longest Substring Without Repeating Characters
Solution
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.*/
/**
 * @param {string} s
 * @return {number}
 */
//brute force
//time(n ^ 3)
//space(n)
const checkUnit = (arr,i,j) =>{
  let dict = {}
  for(index = i; index < j;index++){
      if (dict[arr[index]] != null)return false
      dict[arr[index]] = 1
  }
  
  return true
}
var lengthOfLongestSubstring = function(s) {
  res = 0
  for (i=0;i<s.length;i++){
      for(j=i+1;j<=s.length;j++){
          if (checkUnit(s.split(""),i,j)) res = Math.max(j - i,res)
      }
  }
  return res
};

//time(2n)
//space(n)
var lengthOfLongestSubstring = function(s) {
  i = 0
  j = 0
  res = 0
  dict = {}
  arr = s.split("")
  while(i < arr.length && j<arr.length){
    if (dict[arr[j]] == null){
      dict[arr[j]] = 1
      j++
      res = Math.max( res, j - i)
    }else{
      dict[arr[i]] = null
      i++
    }
  } 
  return res
}
//time O(n) space O(n)
var lengthOfLongestSubstring = function(s) {
  res = 0
  arr = s.split("")
  dict = {}
  for(i=0,j=0;j<arr.length;j++){
    if (dict[arr[j]] != null){
      i = Math.max(i,dict[arr[j]])
    }
    res = Math.max(res,j - i + 1)
    dict[arr[j]] = j + 1
  }
  return res
}