/*Decode Ways
A message containing letters from A-Z is being encoded to numbers using the following mapping:

'A' -> 1
'B' -> 2
...
'Z' -> 26
Given a non-empty string containing only digits, determine the total number of ways to decode it.

Example 1:

Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).
Example 2:

Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).*/
/**
 * @param {string} s
 * @return {number}
 */

/*
Example: s = '226' ways = { '2 2 6', '2 26', '22 6' }
How or why can we implement a top down way?

s = '6' , '6' is valid , way = 1,
    ways('6') = 1
s = '26', '2' is valid , so way = ways('6') = 1
    '26' is valid, so way = 1
    add => ways('26') = 2
s = '226', '2' is valid , way = ways('26') = 2
    '26' is valid, way = ways('6') = 1
    add => ways('226') = 3

From top '226' down to single digit or empty, that's what our recursion function will do.
*/
//time O(n) space O(n) 
var numDecodings = function(s) {
    
    const map = {}

    return ways(s, 0, s.length - 1)

    function ways(s, l, r) {
        // always check memorization first
        if (map[l]) return map[l]

        //  starts with 0 is not allowed
        if (s[l] === '0') return 0

        // boundary      single digit or empty
        if (l >= r) return 1

        // s[i] is valid
        let way = ways(s, l + 1, r)

		// s[i]s[i+1] is valid 
        const twoDigit = (s[l] - '0') * 10 + (s[l + 1] - '0')
        if (twoDigit <= 26)
            way += ways(s, l + 2, r)

        // store
        map[l] = way
		
        return way
    }
};

var numDecodings = function(s) {
    let dp = new Array(s.length+1).fill(0)
    dp[0] = 1
    dp[1] = s[0] == 0 ? 0 : 1
    for(let i=2;i<=s.length;i++){
        let one = s.substring(i-1,i)
        let two = s.substring(i-2,i)
        if(one>=1){
            dp[i] += dp[i-1]
        }
        if(two<= 26 && two>=10){
            dp[i] += dp[i-2]
        }
    }
    console.log(dp)
    return dp[s.length]
};