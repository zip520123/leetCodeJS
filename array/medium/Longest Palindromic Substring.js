/*Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

Example 1:

Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: "cbbd"
Output: "bb"*/
/**
 * @param {string} s
 * @return {string}
 */

 //brute force
 //time O(O^3)
 //space O(2n)
// var longestPalindrome = function(s) {
//   res = ""
//   for(i=0;i<s.length;i++){
//       for(j=1;j<=s.length;j++){
//           let curr = s.substr(i,j)
//           if ( isPalinddromic(curr) == true && curr.length > res.length )
//               res = curr
//       }
//   }
//   return res
// }

// const isPalinddromic = (s) => {
//     let arr1 = s.split("")
//     let arr2 = arr1.slice().reverse()
//     return arr1.join("") == arr2.join("")
// }
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  let start = 0
  let end = 0
  for(i=0;i<s.length;i++){
    let center = findCenter(s,i)
    let curr = extendCorner(s,center[0],center[1])
    let L = curr[0]
    let R = curr[1]
    if(R - L > end - start){
      start = L
      end = R
    }
    i = center[1]
  }
  return s.substr(start,end - start + 1)
}
const findCenter = (s, i) => {
  let L = i, R = i
  while(s[L]==s[R] && R < s.length){
    R++
  }
  return [L,--R]
}
const extendCorner = (s,left,right) => {
  while(s[left] == s[right] && right < s.length && left >= 0){
    left--
    right++
  }
  return [++left,--right]
}