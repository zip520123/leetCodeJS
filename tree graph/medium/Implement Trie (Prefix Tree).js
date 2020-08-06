/* Implement Trie (Prefix Tree)
Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true
Note:

You may assume that all inputs are consist of lowercase letters a-z.
All inputs are guaranteed to be non-empty strings.

*/

/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.set = {}
    this.isEnd = false
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this
    for(let i=0;i<word.length;i++){
        let c = word[i]
        if (curr.set[c] == null) {
            curr.set[c] = new Trie()
        }
        curr = curr.set[c]
    }
    curr.isEnd = true
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this
    for(let i=0;i<word.length;i++){
        let c = word[i]
        if(curr.set[c] != null){
            curr = curr.set[c]
        } else {return false}
    }
    return curr.isEnd
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this
    for(let i=0;i<prefix.length;i++){
        let c= prefix[i]
        if(curr.set[c] == null) {
            return false
        }
        curr = curr.set[c]
    }
    return true
};


/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */