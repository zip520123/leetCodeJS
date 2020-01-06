/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let dict = {}
  while(n != 1){
    let sum = 0
    let curr = n
    while(curr > 0){
      sum += (curr % 10) ** 2
      curr = curr / 10 | 0
    }
    
    if (dict[sum]){
      return false
    }
    dict[sum] = 1
    n = sum
  }
  return true
}
