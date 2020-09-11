/*Regular Expression Matching
Given an input string (s) and a pattern (p), implement regular expression matching with support for '.' and '*'.

'.' Matches any single character.
'*' Matches zero or more of the preceding element.
The matching should cover the entire input string (not partial).

Note:

s could be empty and contains only lowercase letters a-z.
p could be empty and contains only lowercase letters a-z, and characters like . or *.
Example 1:

Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
Example 2:

Input:
s = "aa"
p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
Example 3:

Input:
s = "ab"
p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
Example 4:

Input:
s = "aab"
p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".
Example 5:

Input:
s = "mississippi"
p = "mis*is*p*."
Output: false
*/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    let dp = new Array(s.length+1)
    for (let i=0;i<dp.length;i++){
        dp[i] = new Array(p.length+1)
    }
    dp[0][0] = true
    
    for(let i=1;i<dp.length;i++){
        dp[i][0] = false
    }
    
    for(let i=1;i<dp[0].length;i++) {
        if(p[i-1]=="*") {
            dp[0][i] = dp[0][i-2]
        } else {
            dp[0][i] = false
        }
    }
    
    for(let i=1;i<dp.length;i++){
        for(let j=1;j<dp[i].length;j++) {
            if(p[j-1] == "." || p[j-1]==s[i-1]) {
                dp[i][j] = dp[i-1][j-1]
            } else if (p[j-1] == "*") {
                dp[i][j] = dp[i][j-2]
                if(p[j-2] == "."||p[j-2]==s[i-1]) {
                    dp[i][j] = dp[i][j] || dp[i-1][j]
                }
            } else {
                dp[i][j] = false
            }
        }
    }
    return dp[s.length][p.length]
};
// let input = "aa"
// let input2 = "a"
// let input = "aab"
// let input2 = "c*a*b"
let input = "aa"
let input2 = "a*"

console.log(isMatch(input,input2));