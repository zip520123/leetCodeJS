/*Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]*/

/**
 * @param {number} n
 * @return {string[]}
 */

var generateParenthesis = function(n) {
  ans = []
  const backtrack = (s,left,right) =>{
      if (s.length == 2 * n) {
          ans.push(s)
      }
      if (left < n)
          backtrack(s+"(",left+1,right)
      if (right < left)
          backtrack(s+")",left,right+1)
  }
  backtrack("",0,0)
  return ans
};

var generateParenthesis = function(n) {
  //find all combination filter isValid
  
  list = ["(",")"]
  res = [""]
  for(i=0;i<n*2;i++){
    res.splice(0,res.length).forEach(token=>{
      list.forEach(char=>{
        res.push(token + char)
      })
    })
  }
  res = res.filter(el=>{
    list = el.split("")
    stack = []
    for(i=0;i<list.length;i++){
      if (list[i] == "(") stack.unshift("(")
      if (list[i] == ")")
        if (stack.shift() != "(")
          return false
    }
    return stack.length == 0  
  })
  return res
}

var generateParenthesis = function(n) {
 //find all combination only add valid
  list = ["(",")"]
  res = [""]
  for(i=0;i<n*2;i++){
    res.splice(0,res.length).forEach(token =>{
      curr = token.split("")
      left = 0
      right = 0
      for(j=0;j<curr.length;j++){
        if (curr[j] == "(") left ++
        if (curr[j] == ")") right ++
      }
      list.forEach(char=>{
        if (char == "(" && left < n)
          res.push(token + char)
        if (char == ")" && left > right)
          res.push(token + char)
      })
    })
  }
  return res   
}
