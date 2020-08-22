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
//time O(M^2 * N) space O(2N)
var ladderLength = function(beginWord, endWord, wordList) {
    let wordSet = new Set(wordList)
    let seenSet = new Set()
    if (wordSet.has(endWord) == false) return 0
    let queue = [beginWord]
    let level = 1
    while(queue.length > 0) {
        let temp = queue.splice(0, queue.length) 
        
        for (item of temp) {
            if(item == endWord) {
                return level
            }
            for(word of wordList) {
                if ( seenSet.has(word) == false && similer(item, word)) {
                    seenSet.add(word)
                    queue.push(word)
                }
            }
        }
        level++
    }
    return 0
};

var similer = (word1,word2) => {
    let diff = 0
    let list1 = word1.split('')
    let list2 = word2.split('')
    for (let i=0;i<list1.length;i++) {
        if (list1[i] != list2[i]) {
            diff++
        }
    }
    return diff <= 1
} 

let beginWord = "hit"
let endWord = "cog"
let wordList = ["hot","dot","dog","lot","log","cog"]

similer("hot","hit")

similer("hota","hitb")