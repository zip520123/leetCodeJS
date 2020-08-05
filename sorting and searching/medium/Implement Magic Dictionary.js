/*
Implement a magic directory with buildDict, and search methods.

For the method buildDict, you'll be given a list of non-repetitive words to build a dictionary.

For the method search, you'll be given a word, and judge whether if you modify exactly one character into another character in this word, the modified word is in the dictionary you just built.

Example 1:
Input: buildDict(["hello", "leetcode"]), Output: Null
Input: search("hello"), Output: False
Input: search("hhllo"), Output: True
Input: search("hell"), Output: False
Input: search("leetcoded"), Output: False
Note:
You may assume that all the inputs are consist of lowercase letters a-z.
For contest purpose, the test data is rather small by now. You could think about highly efficient algorithm after the contest.
Please remember to RESET your class variables declared in class MagicDictionary, as static/class variables are persisted across multiple test cases. Please see here for more details.*/

/**
 * Initialize your data structure here.
 */
// var MagicDictionary = function() {
    
// };

// /**
//  * Build a dictionary through a list of words 
//  * @param {string[]} dict
//  * @return {void}
//  */
// //time O(N)
// //space O(N)
// MagicDictionary.prototype.buildDict = function(dict) {
//     this.set = new Set(dict)
// };

// /**
//  * Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
//  * @param {string} word
//  * @return {boolean}
//  */

//  //time O(n)
//  //space O(n)
// MagicDictionary.prototype.search = function(word) {

//     for (item of this.set) {
//         let mismatch = 0
//         console.log(item, word)
//         if (item.length != word.length) continue
        
//         for (let i=0;i<word.length;i++){
//             if (item[i] != word[i]){
//                 mismatch += 1
//                 if (mismatch > 1) break
//             }
//         }
//         if (mismatch == 1) return true
//     }
    
//     return false
// };

/** 
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dict)
 * var param_2 = obj.search(word)
 */


// //Generalized Neighbors 
// var MagicDictionary = function() {
//     this.words = {}
// };

// /**
//  * Build a dictionary through a list of words 
//  * @param {string[]} dict
//  * @return {void}
//  */
// // time O(n^2)
// // space O(n)
// MagicDictionary.prototype.buildDict = function(dict) {
//     dict.forEach(w => {
//         for (let i=0;i<w.length;i++) {
//             let c = w[i]
            
//             let gword = w.substr(0,i) + "*" + w.substr(i+1)
            
//             if (this.words[gword] == null) {
//                 this.words[gword] = [c] 
//             } else {
//                 this.words[gword].push(c)
//             }
            
//         }
//     })
// };

// /**
//  * Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
//  * @param {string} word
//  * @return {boolean}
//  */
// MagicDictionary.prototype.search = function(word) {
//     for(let i=0;i<word.length;i++) {
//         let c = word[i]
//         let gword = word.substr(0,i) + "*" + word.substr(i+1)

//         if (this.words[gword] != null) {
//             let list = this.words[gword]
//             if (list.length == 1 && list[0] == c) {
//                 continue
//             }
//             return true
//         }

        
//     }
//     return false
// };



//trie tree
var MagicDictionary = function() {
    this.tree = new Trie()
};

/**
 * Build a dictionary through a list of words 
 * @param {string[]} dict
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dict) {
    let root = this.tree
    
    dict.forEach(word=>{
        let curr = root
        for (let i=0;i<word.length;i++){
            let c = word[i]
            if (curr.child[c] == null) {
                curr.child[c] = new Trie()
            } 
            curr = curr.child[c]
        }
        curr.isEnd = true
    })

};

/**
 * Returns if there is any word in the trie that equals to the given word after modifying exactly one character 
 * @param {string} word
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(word) {
    console.log(this.tree);
    root = this.tree
    let stack = [root]
    while( stack.length > 0) {
        let node = stack.pop()
        // node
        console.log(node.child);
        for (let key of Object.keys(node.child)) {
            stack.push(node.child[key])
        }
        
        //todo: complete it, I don't know how to...
        
        
        
        
    }
    // var mysearch = ( index, node, diff) => {
    //     if (diff > 1) {
    //         return false
    //     }
    //     if (diff <= 1) {
    //         if (node.isEnd == true && diff == 1) {
    //             return true
    //         }
    //         if (node.child[word[index]] == null) {
    //             diff + 1
    //             let flag = false
    //             Object.keys(node.child).forEach(key =>{
    //                 flag |= mysearch(index+1,node.child[key],diff ) 
                    
    //             })
    //             console.log(flag);
    //             return flag
    //         } else {
    //             return mysearch(index+1, node.child[word[index]], diff)
    //         }
            
    //     }
        
    // }
    // return mysearch( 0, this.tree,0)
};



var Trie = function () {
    this.child = {}
    this.isEnd = false
}



var obj = new MagicDictionary()

let input = ["MagicDictionary", "buildDict", "search", "search"]
let input2 = [[], [["hello","leetcode"]], ["hello"],["leetcod"]]
// let input2 = [[], [["hello","leetcode"]], ["hello"], ["hhllo"], ["hell"], ["leetcoded"]]
// let input = ["MagicDictionary", "buildDict", "search", "search", "search", "search"]
// let input2 = [[], [["hello","hallo","leetcode"]], ["hello"], ["hallo"], ["hell"], ["leetcodd"]]

for (let i=1;i<input.length;i++){
    if (input[i] == "buildDict") {
        obj.buildDict(input2[i][0])
    }
    if (input[i] == "search") {
        console.log(obj.search(input2[i][0]))
    }
}
console.log(obj)