/*Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true*/
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  //stack = []
  let stack = []
  //for w in s
  for (i=0; i<s.length;i++){
    let w = s[i] 
  //if w === "(" || w === "[" || w === "{"
    if (w==="(" || w ==="[" || w === "{")
        // stack.unshfit(w)
      stack.unshift(w)
  //else if w === ")"
    else if (w=== ")") {
      // if stack.shift() != ( return false
      if (stack.shift() != "(") return false
    }
  //else if w === "]"
    else if (w === "]"){
      // if stack.shift() != [ return false
      if (stack.shift() != "[") return false
    }
  //else if w === "}"
    else if (w === "}"){
      // if stack.shift() != { return false
      if (stack.shift() != "{") return false
    }
  }
  //return stack.leng == 0
  return stack.length == 0
};