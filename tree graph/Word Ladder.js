/*Word Ladder

Solution
Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:

Only one letter can be changed at a time.
Each transformed word must exist in the word list.
Note:

Return 0 if there is no such transformation sequence.
All words have the same length.
All words contain only lowercase alphabetic characters.
You may assume no duplicates in the word list.
You may assume beginWord and endWord are non-empty and are not the same.
Example 1:

Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
Example 2:

Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

*/
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
//time O(M^2 * N) space O(M^2 * N) M is the length of each word, N is the total number of words
//
var ladderLength = function(beginWord, endWord, wordList) {
    let set = new Set(wordList)
    let seenSet = new Set()
    if(set.has(endWord) == false) return 0
    
    let level = 1
    let queue = [beginWord]
    
    while(queue.length > 0) {
        let temp = queue.splice(0,queue.length)
        for(let word of temp) {
            if (word==endWord) {
                return level
            }
            for(let dictWord of set) {
                if(similar(word,dictWord) == true && seenSet.has(dictWord) == false) {
                    queue.push(dictWord)
                    seenSet.add(dictWord)
                }
            }
        }
        level++
    }
    return 0
};

const similar = (w1,w2) => {
    let count = 0
    for(let i=0;i<w1.length;i++){
        if (w1[i] != w2[i])count++
    }
    return count == 1
}

//bidirectional search time O(M^2 * N) space O(M^2 * N) average is less than one way
var ladderLength = function(beginWord, endWord, wordList) {

    let beginSet = new Set([beginWord])
    let endSet = new Set([endWord])
    let seenSet = new Set()
    let wordSet = new Set(wordList)
    if(wordSet.has(endWord) == false) return 0
    let level = 1

    while(beginSet.size >0 && endSet.size > 0) {
        if(beginSet.size > endSet.size) {
            let t = beginSet
            beginSet = endSet
            endSet = t
        }

        let temp = new Set()
        for(let word of beginSet) {
            for(let i = "a".charCodeAt(); i<= "z".charCodeAt();i++) {
                let char = String.fromCharCode(i)
                for(let j=0;j<word.length;j++) {
                    let newWord = word.substring(0,j) + char + word.substring(j+1)
                    if(endSet.has(newWord)) {
                        return level + 1
                    }

                    if(seenSet.has(newWord) == false && wordSet.has(newWord)) {
                        temp.add(newWord)
                        seenSet.add(newWord)
                    }
                }
            }
        }

        beginSet = temp
        level ++
    }
    return 0
}



let input = "hit"
let input2 = "cog"
let input3 = ["hot","dot","dog","lot","log","cog"]

similar("hot","hit")
similar("hota","hitb")

console.log(ladderLength(input,input2,input3));