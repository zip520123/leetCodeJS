/*Permutation in String
Given two strings s1 and s2, write a function to return true if s2 contains the permutation of s1. In other words, one of the first string's permutations is the substring of the second string.

 

Example 1:

Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").
Example 2:

Input:s1= "ab" s2 = "eidboaoo"
Output: False
 

Constraints:

The input strings only contain lower case letters.
The length of both given strings is in range [1, 10,000].
*/
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
//the same as "Find All Anagrams in a String"
//time O(n) space O(s1.length) or O(1) 26 key-value pairs
var checkInclusion = function(s1, s2) {
    let dict = {}
    for(let c of s1) {
        dict[c] = dict[c] == null?1:++dict[c]
    }
    let left = 0, right =0, count = s1.length
    while(right<s2.length){
        let c = s2[right]
        if(dict[c]!=null) {
            if(dict[c]>0) count--
            dict[c]--
        } else {
            dict[c] = -1
        }
        while(dict[c]<0) {
            dict[s2[left]]++
            if(dict[s2[left]]>0) count++
            left++
        }
        if(count==0)return true
        right++
    }
    return false
};