/*Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
 

Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
 

Note:

The input string length won't exceed 1000.*/
/**
 * @param {string} s
 * @return {number}
 */
//brute force NOT work
var countSubstrings = function(s) {
  //check every subscring and check
  res = 0
  for(i=0;i<s.length;i++){
    for(j=1;j<=s.length - i;j++){
      if(check(s.substr(i,j))) res ++
    }
  }
  return res
}

const check = (s) =>{
  let arr = s.split("")
  let arr2 = arr.slice().reverse()
  return arr.join() == arr2.join()
}

/*
Approach #1: Expand Around Center [Accepted]
Intuition

Let N be the length of the string. The middle of the palindrome could be in one of 2N - 1 positions: either at letter or between two letters.

For each center, let's count all the palindromes that have this center. Notice that if [a, b] is a palindromic interval (meaning S[a], S[a+1], ..., S[b] is a palindrome), then [a+1, b-1] is one too.

Algorithm

For each possible palindrome center, let's expand our candidate palindrome on the interval [left, right] as long as we can. The condition for expanding is left >= 0 and right < N and S[left] == S[right]. That means we want to count a new palindrome S[left], S[left+1], ..., S[right].*/

var countSubstrings = function(s) {
  let res = 0
    const findCenter = (s,i) => {
        let l = i,r = i
        while(s[l]==s[r]&&r<s.length){
            res++
            r++
        }
        return [l,--r]
    }
    const findBoard = (s,l,r)=>{
        l--
        r++
        while(s[l]==s[r]&&l>=0&&r<s.length){
            l--
            r++
            res++
        }
        return [++l,--r]
    }
    
    for(let i=0;i<s.length;i++){
        let center = findCenter(s,i)
        let board = findBoard(s,center[0],center[1])
    }
    return res
}