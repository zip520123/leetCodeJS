/*Longest Substring with At Least K Repeating Characters

Find the length of the longest substring T of a given string (consists of lowercase letters only) such that every character in T appears no less than k times.

Example 1:

Input:
s = "aaabb", k = 3

Output:
3

The longest substring is "aaa", as 'a' is repeated 3 times.
Example 2:

Input:
s = "ababbc", k = 2

Output:
5

The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {

    function divide(start, end) {
        if (end - start + 1 < k) return 0   // without this line will be much slower, give it a try.
        if (start > end) return 0

        const count = {}

        // count the frequency
        for (let i = start; i <= end; i++) {
            count[s[i]] = count[s[i]] ? count[s[i]] + 1 : 1
        }

        // reduce the length of string 
        while (end - start + 1 >= k && count[s[start]] < k)
            start++
        while (end - start + 1 >= k && count[s[end]] < k)
            end--
        if (end - start + 1 < k) return 0

        // divede at i: count[s[i]] < k
        for (let i = start; i <= end; i++) {
            if (count[s[i]] < k) {
                return Math.max(divide(start, i - 1), divide(i + 1, end))
            }
        }

        // find a Substring with At Least K Repeating Characters
        return end - start + 1
    }

    return divide(0, s.length - 1)
}