/*Valid Palindrome II
Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.*/
/**
 * @param {string} s
 * @return {boolean}
 */
//time O(N) space O(1)
var validPalindrome = function(s) {
    for(let i=0,j=s.length-1;i<j;i++,j--) {
        if(s[i]!=s[j]) {
            let i1 = i, j1= j - 1,i2 = i+1,j2 = j
            while(i1<j1 && s[i1] == s[j1]) {i1++;j1--}
            while(i2<j2 && s[i2] == s[j2]) {i2++;j2--}
            return i1>=j1 || i2 >= j2
        }
    }
    return true
};
let input = "deeee"
// let input = "abca"
// let input = "eeee"
// let input = "abc"
// let input = "cbbbcg"
console.log(validPalindrome(input));