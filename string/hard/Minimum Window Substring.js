/*Minimum Window Substring
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

Example:

Input: S = "ADOBECODEBANC", T = "ABC"
Output: "BANC"
Note:

If there is no such window in S that covers all characters in T, return the empty string "".
If there is such window, you are guaranteed that there will always be only one unique minimum window in S.*/
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// brute force Time Limit Exceeded time O(N^2) space O(2N)
var minWindow = function(s, t) {
    if(t.length > s.length) return ""
    
    let charMap = new Map()
    for(let char of t) {
        if (charMap.get(char) == null) {
            charMap.set(char, 1)    
        } else {
            let num = charMap.get(char)
            charMap.set(char, num + 1)
        }
        
    }
    let curr = ""
    out: for(let i=0;i<s.length;i++) {
        if (charMap.has(s[i])) {
            let seenMap = new Map(charMap)
            
            if(seenMap.get(s[i])) {
                let num = seenMap.get(s[i]) - 1
                if(num == 0) {
                    seenMap.delete(s[i])
                    
                    if (seenMap.size == 0) {
                        let word = s.substring(i,i+1)
                        if(curr.length > word.length || curr.length == 0) {
                            curr = word
                            continue out
                        }
                    }
                } else {
                    seenMap.set(s[i],num)
                }
            }
            for(let j = i+1;j<s.length;j++) {
                if (charMap.has(s[j]) ) {
                    
                    if(seenMap.get(s[j])) {
                        let num = seenMap.get(s[j]) - 1
                        if(num == 0) {
                            seenMap.delete(s[j])
                            
                            if (seenMap.size == 0) {
                                let word = s.substring(i,j+1)
                                if(curr.length > word.length || curr.length == 0) {
                                    curr = word
                                    continue out
                                }
                            }
                        } else {
                            seenMap.set(s[j],num)
                        }
                    }
                }
            }
        }
    }
    return curr
};

//two pointer time O(N) space O(N)
var minWindow = function(s, t) {
    if (t.length > s.length) return ""
    let count = t.length
    let charMap = new Map()
    for(let char of t) {
        if(charMap.has(char)) {
            charMap.set(char,charMap.get(char) +1)
        }else{
            charMap.set(char,1)
        }
    }
    let l = 0, r = 0
    let curr = ""
    
    while(r<s.length) {
        console.log(charMap);
        if(charMap.has(s[r])){
            if(charMap.get(s[r]) > 0) count --
            charMap.set(s[r],charMap.get(s[r]) - 1)
        } else {
            charMap.set(s[r], - 1)
        }
        
        while(count == 0) {
            console.log(charMap);
            if(r - l + 1 < curr.length || curr.length == 0) {
                curr = s.substring(l,r + 1)
            }
            charMap.set(s[l],charMap.get(s[l]) + 1)
            if(charMap.get(s[l]) > 0) {
                count++
            }
            l++
        }
        r++
    }
    return curr
};

// let input = "ADOBECODEBANC"
// let input2 = "ABC"
let input = "aaaaaaaaaaaabbbbbcdd"
let input2 = "abcdd"
// let input = "ab"
// let input2 = "a"
console.log(minWindow(input, input2));