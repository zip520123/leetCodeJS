/*Queue Reconstruction by Height
Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers (h, k), where h is the height of the person and k is the number of people in front of this person who have a height greater than or equal to h. Write an algorithm to reconstruct the queue.

Note:
The number of people is less than 1,100.

 
Example

Input:
[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

Output:
[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]*/

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
//time O(nlogn + n^2) space O(n)
var reconstructQueue = function(people) {
    people.sort((a,b)=>{
        if(a[0]!=b[0]){
            return a[0]-b[0]
        } else{
            return b[1]-a[1]
        }   
    })
    
    let res = new Array(people.length)
    
    for(let group of people) {
        let count = group[1]
        let i = 0
        while(i<people.length){
            if (count <= 0 && res[i] == null) {
                res[i] = group
                break
            } else if(res[i] == null || res[i][0] >= group[0]){
                count--
            }
            i++    
        }
    }
    
    return res
};

//time O(nlogn) space O(n)
/*
1. Pick out tallest group of people and sort them in a subarray (S). Since there's no other groups of people taller than them, therefore each guy's index will be just as same as his k value.
2. For 2nd tallest group (and the rest), insert each one of them into (S) by k value. So on and so forth.
E.g.
input: [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]
[7,0] 
[7,0] [7,1] 
[7,0] [6,1] [7,1] 
[5,0] [7,0] [6,1] [7,1] 
[5,0] [7,0] [5,2] [6,1] [7,1]
*/
var reconstructQueue = function(people) {
    people.sort((a,b)=>{
        if(a[0]==b[0]){
            return a[1]-b[1]
        } else{
            return b[0]-a[0]
        }
    })

    let res = []
    for(let person of people) {
        console.log(res)
        res.splice(person[1],0,person)
    }
    
    return res
};

let input = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
console.log(reconstructQueue(input));

