/*Find All Anagrams in a String
Given a string s and a non-empty string p, find all the start indices of p's anagrams in s.

Strings consists of lowercase English letters only and the length of both strings s and p will not be larger than 20,100.

The order of output does not matter.

Example 1:

Input:
s: "cbaebabacd" p: "abc"

Output:
[0, 6]

Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input:
s: "abab" p: "ab"

Output:
[0, 1, 2]

Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".*/
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
// see "Permutation in String"
//brute force time O(n^2) space O(n)
var findAnagrams = function(s, p) {
    if(s.length==0) return []
    let res = []
    let map = new Map()
    let count = p.length
    for(let i=0;i<p.length;i++){
        if(map.has(p[i])) {
            map.set(p[i],map.get(p[i])+1)
        } else {
            map.set(p[i],1)
        }
    }
    
    out:for(let i=0;i<s.length;i++){
        let newMap = new Map(map)
        let curr = count
        for(let j=i;j<s.length;j++){
            if(newMap.has(s[j])) {
                if(newMap.get(s[j]) > 0 ){
                    curr--
                    newMap.set(s[j],newMap.get(s[j]) - 1)
                    if(curr==0){
                        res.push(i)
                        continue out
                    }
                }else{
                    continue out
                }
            } else {
                continue out
            }
        }
    }
    return res
};

//sliding window time O(n) space O(n)
var findAnagrams = function(s, p) {
    let res = []
    if (s.length ==0) return []
    let map = new Map()
    for(let w of p){
        if(map.has(w)) {
            map.set(w,map.get(w)+1)
        }else{
            map.set(w,1)
        }
    }
    
    let left = 0
    let right = 0
    let count = p.length
    while(right<s.length) {
        let w = s[right]
        if(map.has(w)) {
            if(map.get(w)>0){
                count--
            }
            map.set(w,map.get(w) - 1)            
        } else {
            map.set(w,-1)
        }
        if(count==0)res.push(left)
        right++
        if(right-left == p.length){
            map.set(s[left],map.get(s[left])+1)
            if(map.get(s[left])>0)count++
            left++
        }
    }
    
    return res
};

let input = "cbaebabacd"
let input2 = "abc"
console.log(findAnagrams(input,input2));