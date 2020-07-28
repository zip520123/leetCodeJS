/*Dinner Plate Stacks
You have an infinite number of stacks arranged in a row and numbered (left to right) from 0, each of the stacks has the same maximum capacity.

Implement the DinnerPlates class:

DinnerPlates(int capacity) Initializes the object with the maximum capacity of the stacks.
void push(int val) pushes the given positive integer val into the leftmost stack with size less than capacity.
int pop() returns the value at the top of the rightmost non-empty stack and removes it from that stack, and returns -1 if all stacks are empty.
int popAtStack(int index) returns the value at the top of the stack with the given index and removes it from that stack, and returns -1 if the stack with that given index is empty.
Example:

Input: 
["DinnerPlates","push","push","push","push","push","popAtStack","push","push","popAtStack","popAtStack","pop","pop","pop","pop","pop"]
[[2],[1],[2],[3],[4],[5],[0],[20],[21],[0],[2],[],[],[],[],[]]
Output: 
[null,null,null,null,null,null,2,null,null,20,21,5,4,3,1,-1]

Explanation: 
DinnerPlates D = DinnerPlates(2);  // Initialize with capacity = 2
D.push(1);
D.push(2);
D.push(3);
D.push(4);
D.push(5);         // The stacks are now:  2  4
                                           1  3  5
                                           ﹈ ﹈ ﹈
D.popAtStack(0);   // Returns 2.  The stacks are now:     4
                                                       1  3  5
                                                       ﹈ ﹈ ﹈
D.push(20);        // The stacks are now: 20  4
                                           1  3  5
                                           ﹈ ﹈ ﹈
D.push(21);        // The stacks are now: 20  4 21
                                           1  3  5
                                           ﹈ ﹈ ﹈
D.popAtStack(0);   // Returns 20.  The stacks are now:     4 21
                                                        1  3  5
                                                        ﹈ ﹈ ﹈
D.popAtStack(2);   // Returns 21.  The stacks are now:     4
                                                        1  3  5
                                                        ﹈ ﹈ ﹈ 
D.pop()            // Returns 5.  The stacks are now:      4
                                                        1  3 
                                                        ﹈ ﹈  
D.pop()            // Returns 4.  The stacks are now:   1  3 
                                                        ﹈ ﹈   
D.pop()            // Returns 3.  The stacks are now:   1 
                                                        ﹈   
D.pop()            // Returns 1.  There are no stacks.
D.pop()            // Returns -1.  There are still no stacks.
 

Constraints:

1 <= capacity <= 20000
1 <= val <= 20000
0 <= index <= 100000
At most 200000 calls will be made to push, pop, and popAtStack.
*/


// /**
//  * @param {number} capacity
//  */

// var DinnerPlates = function(capacity) {
//     this.capacity = capacity
//     this.stacks = [[]]
//     this.popIndext = 0
//     this.pushIndex = 0
// };

// /** 
//  * @param {number} val
//  * @return {void}
//  */
// DinnerPlates.prototype.push = function(val) {
//     while (this.pushIndex < this.stacks.length && this.stacks[this.pushIndex].length === this.capacity) this.pushIndex++;
//     if (this.pushIndex === this.stacks.length) {
//         this.stacks[this.pushIndex] = [val]
//     }
//     else this.stacks[this.pushIndex].push(val);
//     if (this.popIndex < this.pushIndex) this.popIndex = this.pushIndex
// };

// /**
//  * @return {number}
//  */
// DinnerPlates.prototype.pop = function() {
//     while (this.stacks[this.popIndex].length === 0) {
//         if (this.popIndex > 0) this.popIndex--;
//         else return -1
//     }
//     let returnValue = this.stacks[this.popIndex].pop();
//     if (this.pushIndex > this.popIndex) this.pushIndex = this.popIndex;
//     return returnValue;
// };

// /** 
//  * @param {number} index
//  * @return {number}
//  */
// DinnerPlates.prototype.popAtStack = function(index) {
//     if (index >= this.stacks.length) return -1
//     if (index < this.pushIndex) this.pushIndex = index;
//     return this.stacks[index].length > 0 ? this.stacks[index].pop() : -1
// };




 /**
 * @param {number} capacity
 */
var DinnerPlates = function(capacity) {
    this.capacity = capacity
    
    this.stack = [[]]
};

/** 
 * @param {number} val
 * @return {void}
 */
DinnerPlates.prototype.push = function(val) {
    for(let i=0;i<this.stack.length;i++) {
        if(this.stack[i].length < this.capacity) {
            this.stack[i].push(val)
            return
        }
    }
    this.stack.push([val])
    
};

/**
 * @return {number}
 */
DinnerPlates.prototype.pop = function() {
    
    if (this.stack[this.stack.length - 1].length == 0) {
        return -1
    } else {
        let temp = this.stack[this.stack.length - 1].pop()
        
        while(this.stack[this.stack.length - 1].length == 0 && this.stack.length > 1) {
            this.stack.pop()
        }
        
        return temp
    }
};

/** 
 * @param {number} index
 * @return {number}
 */
DinnerPlates.prototype.popAtStack = function(index) {
    if (index >= this.stack.length || this.stack[index].length == 0) {
        return -1
    } else {
        let temp = this.stack[index].pop()
        if (this.stack.length > 1 && this.stack[index].length == 0 && index == (this.stack.length - 1)) {
            this.stack.splice(index,1)
        }
        return temp
    }
};

/** 
 * Your DinnerPlates object will be instantiated and called as such:
 * var obj = new DinnerPlates(capacity)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAtStack(index)
 */


// let arr = ["DinnerPlates","push","push","popAtStack","popAtStack","push","popAtStack"]
// let arr2 = 
// [[1],[1],[2],[0],[1],[3],[0]]

// let arr = ["DinnerPlates","push","push","push","popAtStack","pop","pop"]
// let arr2 = [[1],[1],[2],[3],[1],[],[]]

let arr = ["DinnerPlates","push","push","push","push","push","push","push","push","push","push","push","push","push","push","push","push","push","push","push","push","popAtStack","popAtStack","popAtStack","popAtStack","popAtStack","popAtStack","popAtStack","popAtStack","popAtStack","popAtStack","push","push","push","push","push","push","push","push","push","push","push","push","push","push","push","push","push","push","push","push","pop","pop","pop","pop","pop","pop","pop","pop","pop","pop"]
let arr2 = [[2],[373],[86],[395],[306],[370],[94],[41],[17],[387],[403],[66],[82],[27],[335],[252],[6],[269],[231],[35],[346],[4],[6],[2],[5],[2],[2],[7],[9],[8],[1],[474],[216],[256],[196],[332],[43],[75],[22],[273],[101],[11],[403],[33],[365],[338],[331],[134],[1],[250],[19],[],[],[],[],[],[],[],[],[],[]]
// let arr = ["DinnerPlates","push","push","push","popAtStack","pop","pop","push","push"]
// let arr2 = [[1],[1],[2],[3],[0],[],[],[4],[5]]

let obj = new DinnerPlates(arr2[0][0])
arr.forEach((s,index) => {
    if (s == "push") {
        obj.push(arr2[index][0])
    } else if( s == "pop") {

        let temp = obj.pop()
        if (temp == undefined) console.log(obj.stack, `pop index: ${index}, ${arr2[index][0]}`)
    } else if (s == "popAtStack") {
        let temp = obj.popAtStack(arr2[index][0])
        if (temp == undefined) console.log(obj.stack, `at index: ${index}, ${arr2[index][0]}` )
    }
    
})

