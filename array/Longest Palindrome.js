/*Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.*/
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  let dict = {}
  s.split("").forEach(char =>{
      dict[char] = dict[char] == null ? 1 : ++dict[char]
  })
  let res = 0
  let single = 0
  Object.keys(dict).forEach(key=>{
      
      res += (dict[key] / 2 | 0) * 2
      if(dict[key] % 2 == 1)single++
      
  })
  if (single >0)res++
  return res
};