/*Given a list of strings words representing an English Dictionary, find the longest word in words that can be built one character at a time by other words in words. If there is more than one possible answer, return the longest word with the smallest lexicographical order.

If there is no answer, return the empty string.
Example 1:
Input: 
words = ["w","wo","wor","worl", "world"]
Output: "world"
Explanation: 
The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
Example 2:
Input: 
words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
Output: "apple"
Explanation: 
Both "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".
Note:

All the strings in the input will only contain lowercase letters.
The length of words will be in the range [1, 1000].
The length of words[i] will be in the range [1, 30].*/

/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    let trie = new Trie()
    words.forEach(word => {
        trie.add(word)
    })

    let res = ""
    let queue = [trie]
    for (let c of Object.keys(trie.set)) {
        queue.push(trie.set[c])
    }
    
    while(queue.length > 0) {
        let temp = queue.splice(0,queue.length)
        
        for(let i=0;i<temp.length;i++) {
            let node = temp[i]
            if (node.isEnd == true) {
                if(node.word.length > res.length ){
                    res = node.word      
                }
                if (res.length == node.word.length && res > node.word) {
                    res = node.word
                }
                for (let c of Object.keys(node.set)) {
                    queue.push(node.set[c])
                }
            }
        }
    }
    return res
};

var Trie = function() {
    this.set = {}
    this.isEnd = false
}

Trie.prototype.add = function(word) {
    let curr = this
    for(let i=0;i<word.length;i++) {
        let c = word[i]
        if (curr.set[c] == null) {
            curr.set[c] = new Trie()
        }
        curr = curr.set[c]
    }
    curr.word = word
    curr.isEnd = true
}



// console.log(longestWord(["apple", "banna"]));
// console.log(longestWord(["w","wo","wor","worl", "world"]));
// console.log(longestWord([]));
console.log(longestWord(["a","banana","app","appl","ap","apply","apple"]));
