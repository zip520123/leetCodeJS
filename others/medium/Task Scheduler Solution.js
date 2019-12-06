/*Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different letters represent different tasks. Tasks could be done without original order. Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.

However, there is a non-negative cooling interval n that means between two same tasks, there must be at least n intervals that CPU are doing different tasks or just be idle.

You need to return the least number of intervals the CPU will take to finish all the given tasks.

 

Example:

Input: tasks = ["A","A","A","B","B","B"], n = 2
Output: 8
Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.
 

Note:

The number of tasks is in the range [1, 10000].
The integer n is in the range [0, 100].*/
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    dict = {}
    tasks.forEach(n=>{
      if (dict[n] ==null) dict[n] = 0
      dict[n]++ 
    })
    max = 0 
    for(value in dict){
      max = Math.max(max,value)
    }
    count = 0
    for(value in dict){
      if (value == max) count ++
    }
    return Math.max((max - 1) * (n + 1) , tasks.length)
};


var leastInterval = function(tasks,n) {
  dict = {}
  tasks.forEach(char =>{
      dict[char] = dict[char] == null ? 1 : ++dict[char]
  })
  list = Object.keys(dict).map(key=>dict[key]).sort((a,b)=>b-a)
  res = 0

  while(list.length > 0){
    temp = []
    for(i=0;i<=n;i++){
      temp.push(list.shift())
    }
    for(i=0;i<temp.length;i++){
      temp[i]--
      if (temp[i]>0){
        list.push(temp[i])
      }
    }
    list.sort((a,b)=>b-a)
    if (list.length == 0){
      temp.forEach(n=>{
        if (n == 0)res ++
      })
      
    }else{
      res += n + 1
    }
  }
  return res
}

function leastInterval(tasks, n) {
  const arr = new Array(26).fill(0);

  for (let t of tasks) {
    arr[t.charCodeAt(0) - 'A'.charCodeAt(0)]++;
  }

  arr.sort((a, b) => a - b);

  let i = 25;
  while (i >= 0 && arr[i] === arr[25]) {
    i--;
  }

  return Math.max(
    // case 1
    // AB...AB... = (arr[25] - 1) * (n + 1)
    // AB...AB...AB = (arr[25] - 1) * (n + 1) + (25 - i)
    (arr[25] - 1) * (n + 1) + (25 - i),

    // case 2
    // e.g. (ABC)(ABD)(ABEF)
    tasks.length,
  );
}

function leastInterval(tasks, n) {
  if (n === 0) return tasks.length;

  const map = {};
  for (let t of tasks) {
    if (map[t] == null) map[t] = 0;
    map[t]++;
  }

  let max = 0;  // task max frequency
  for (let t in map) {
    max = Math.max(max, map[t]);
  }

  let count = 0;  // the number of tasks with same max frequency
  for (let t in map) {
    if (map[t] === max) {
      count++;
    }
  }

  return Math.max(
    // case 1
    // AB...AB... = (max - 1) * (n + 1)
    // AB...AB...AB = (max - 1) * (n + 1) + count
    (max - 1) * (n + 1) + count,

    // case 2
    // e.g. (ABC)(ABD)(ABEF)
    tasks.length,
  );
}