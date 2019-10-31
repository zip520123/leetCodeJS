/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

 /*Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
Clarification:

What should we return when needle is an empty string? This is a great question to ask during an interview.

For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().
*/
var strStr = function(haystack, needle) {
    if (needle == "") return 0

    if (needle.length > haystack) return -1
    //for each index find haystack first char == needle first char
    
    for (let i = 0; i < haystack.length; i+=1) {
        if (haystack[i] == needle[0]) {
            if (haystack.substr(i,needle.length) == needle) return i

        }
    }
    return -1
    // haystack[index] ~ needle length  == needle
    //  return index
    // return -1
    
};
console.log(strStr("hello", "ll") == 2)
console.log(strStr("aaaaa", "bba") == -1)

/*    if (needle == "") return 0
    var i = 0
    if (haystack.length >= needle.length) {
        while (i < haystack.length) {
            //find needle 
            if (haystack[i] == needle[0]) {
                if (haystack.substring(i,i + needle.length) == needle) {
                    return i
                }
            }    
            i += 1
        }
    }
    return -1*/