/*
Count the number of prime numbers less than a non-negative number, n.

Example:

Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.*/

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
//if n < 2 return 0
if (n<2)return 0
//arr[n] = true
let arr = []
for(i = 0;i<n;i++){
  arr.push(true)
}
//for (i = 2; i * i< n; i++)
for(i=2; i*i < n; i++){
  //  if arr[i] == true
  if (arr[i] == true)
  //    for(j = i; j * i < n; j++)
   for(j = i; i*j < n; j++)
    arr[i*j] = false
//      arr[i * j] = false
}

var count = 0
//count arr[2...]
arr.slice(2).forEach(b=>{
  if(b)count++
})
return count
};

console.log(countPrimes(10))