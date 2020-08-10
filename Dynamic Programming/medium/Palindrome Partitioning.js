/*Palindrome Partitioning
Given a string s, partition s such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of s.

Example:

Input: "aab"
Output:
[
  ["aa","b"],
  ["a","a","b"]
]*/
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    let res = []
    
    dfs(s,0, [], res)
    return res
};

const dfs = (s, start, plts , res)=> {
    if(start == s.length) {
        res.push(plts.slice())
    } else {
        for(let i = start;i<s.length;i++){
            let currString = s.substring(start,i+1)
            if(isPalinedrome(currString) == true) {
                plts.push(currString)
                
                dfs(s,i+1, plts, res)
                plts.pop()
            }
        }
    }
}

const isPalinedrome = (s) => {
    let l = 0
    let r = s.length - 1
    while(l < r) {
        if(s[l] != s[r]) return false
        l++
        r--
    }
    return true
}

// console.log(isPalinedrome(""));
// console.log(isPalinedrome("a"));
// console.log(isPalinedrome("aab"));
// console.log(isPalinedrome("aba"));
// console.log(isPalinedrome("aaaac"));
// console.log(isPalinedrome("accca"));
console.log(partition("aba"));