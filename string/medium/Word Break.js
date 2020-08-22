/*Word Break
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, determine if s can be segmented into a space-separated sequence of one or more dictionary words.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
Example 3:

Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
//Time Limit Exceeded
//time O(2^n) space O(2^n)
// var wordBreak = function(s, wordDict) {

//     let set = new Set()
//     for(word of wordDict) {
//         set.add(word)
//     }
//     const dfs = (set, s) => {
//         if (s.length == 0) return true  
//         for(let i=0;i<=s.length;i++) {
//             if ( set.has(s.substring(0,i)) && dfs(set, s.substring(i)) ) {
//                 return true
//             }
//         }
//         return false
//     }
    
//     return dfs(set, s)
// };

//memories 
//time O(2^n) space O(2^n)
// var wordBreak = function(s, wordDict) {

//     let set = new Set(wordDict)
//     let map = new Map()
//     const dfs = (s) => {
//         if (s.length == 0) return true  
//         if (map.has(s)) return map.get(s)
//         for(let i=0;i<=s.length;i++) {
//             if ( set.has(s.substring(0,i)) && dfs(s.substring(i)) ) {
//                 map.set(s.substring(i), true)
//                 return true
//             }
//         }
//         map.set(s, false)
//         return false
//     }
    
//     return dfs(s)
// };

//dp
var wordBreak = function(s, wordDict) {
    let N = s.length;
    let dp = Array(N + 1).fill(0); // 🤔 memo
    dp[0] = 1; // 🛑 base case: we can reach the 0-th index with no words
    for (let i = 0; i < N; ++i) {
        if (!dp[i])
            continue; // i-th index not reachable ❌
        for (let word of wordDict) {
            let j = i + word.length;
            if (j <= N && word == s.substring(i, j))
                dp[j] = 1; // ⭐️ j-th index reached
        }
    }
    return dp[N]; // N-th index reached? 🎯
};

// let input = "leetcode"
// let input2 = ["leet","code"]
// let input = "applepenapple"
// let input2 = ["apple","pen"]
// let input = "aaaaaaa"
// let input2 = ["aaaa","aa"]
let input = "aaaaaaa"
let input2 = ["aaaa","aaa"]

console.log(wordBreak(input,input2));