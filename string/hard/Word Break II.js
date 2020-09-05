/*Word Break II
Given a non-empty string s and a dictionary wordDict containing a list of non-empty words, add spaces in s to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

Note:

The same word in the dictionary may be reused multiple times in the segmentation.
You may assume the dictionary does not contain duplicate words.
Example 1:

Input:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
Output:
[
  "cats and dog",
  "cat sand dog"
]
Example 2:

Input:
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
Output:
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
Explanation: Note that you are allowed to reuse a dictionary word.
Example 3:

Input:
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
Output:
[]*/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
//time O(N!) space O(N!) 
var wordBreak = function(s, wordDict) {
    let res = []
    let tree = new Trie()
    for(let word of wordDict) {
        let curr = tree
        for(let char of word) {
            if(curr.map.has(char) == false) {
                let trie = new Trie()
                curr.map.set(char,trie)
            }
            curr = curr.map.get(char)
        }
        curr.isEnd = true
    }
    let dfs = (currString,currRes) => {
        if(currRes != "")currRes += " "
        let curr = tree
        for(let i=0;i<currString.length;i++) {
            if(curr.map.has(currString[i])) {
                curr = curr.map.get(currString[i])
                if(curr.isEnd == true) {
                    let word = currString.substring(0,i+1)
                    let rest = currString.substring(i+1)
                    if (rest== "") {
                        res.push(currRes + word)
                    } else {
                        dfs(rest,currRes + word)
                    }
                    
                }
            } else {
                return
            } 
        }
    }
    dfs(s,"")
    return res
};

var Trie = function() {
    this.map = new Map()
    this.isEnd = false
}
//time O(N^3) space O(N)
var wordBreak = function(s, wordDict) {
    let map = new Map()
    
    let dfs = (s) => {        
        if (map.has(s)) return map.get(s)
        let res = []
        if(s.length == 0) {
            res.push("")
            return res
        }
        
        for(let word of wordDict) {
            if (s.startsWith(word)) {
                let sublist = dfs(s.substring(word.length))
                for (let sub of sublist) {
                    res.push(word + (sub == "" ? "" : " ") + sub)
                }
            }
        }
        map.set(s,res)
        return res
    }
    return dfs(s)
};

// let input = "catsanddog"
// let input2 = ["cat","cats","and","sand","dog"]
let input = "aaa"
let input2 = ["a","aa","aaa"]
console.log(wordBreak(input,input2));