/*Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.



Example:

Input: "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:

Although the above answer is in lexicographical order, your answer could be in any order you want.*/
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  dict = {}
  if (digits.length < 1)return []
  dict[0] = []
  dict[1] = []
  dict[2] = ["a","b","c"]
  dict[3] = ["d","e","f"]
  dict[4] = "ghi".split("")
  dict[5] = "jkl".split("")
  dict[6] = "mno".split("")
  dict[7] = "pqrs".split("")
  dict[8] = "tuv".split("")
  dict[9] = "wxyz".split("")
  res = [""]

  digits.split("").map(d=>dict[d]).forEach(list=>{
    res.splice(0,res.length).forEach(token=>{
      list.forEach(char=>{
        res.push(token+char)
      })
    })
  })
  return res
}