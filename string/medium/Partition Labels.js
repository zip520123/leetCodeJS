/*Partition Labels
A string S of lowercase English letters is given. We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.

 

Example 1:

Input: S = "ababcbacadefegdehijhklij"
Output: [9,7,8]
Explanation:
The partition is "ababcbaca", "defegde", "hijhklij".
This is a partition so that each letter appears in at most one part.
A partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.
 

Note:

S will have length in range [1, 500].
S will consist of lowercase English letters ('a' to 'z') only.*/
/**
 * @param {string} S
 * @return {number[]}
 */
//time O(n) space O(n)
var partitionLabels = function(S) {
    let dict = {}
    for(let i=0;i<S.length;i++){
        dict[S[i]] = i
    }
    let left = 0, bound = 0, right = 0
    let res = []
    
    while(right<S.length){
        bound = Math.max(bound, dict[S[right]])
        if(bound==right) {
            res.push(right-left + 1)
            left = right+1
        }
        right++
    }
    return res
};