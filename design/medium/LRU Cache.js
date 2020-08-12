/**
 * @param {number} capacity
 */
// var LRUCache = function(capacity) {
//     this.capacity = capacity
//     this.dict = {}
//     this.arr = []
// };

// /** 
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function(key) {
//     let res = -1
//     if(this.dict[key] != null) {
//         res = this.dict[key]
        
//         let index = 0
//         for(let i=0;i<this.arr.length;i++){
//             let item = this.arr[i]
//             if(item == key) {
//                 index = i
//             }
//         }
//         this.arr.splice(index,1)
//         this.arr.push(key)
//     }

    
//     return res
// };

// /** 
//  * @param {number} key 
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function(key, value) {
//     if(this.capacity == 0) return

//     if (this.dict[key] == null){
//         if (this.arr.length == this.capacity ) {
//             let key = this.arr.shift()
            
//             delete this.dict[key]
//         }
//         this.dict[key] = value
//         this.arr.push(key)
        
//     } else {
//         this.dict[key] = value
//         for(let i=0;i<this.arr.length;i++) {
//             let item = this.arr[i]
//             if (item == key) {
//                 this.arr.splice(i,1)
//                 this.arr.push(key)
//             }
//         }
//     }
// };

//WRONG ANSWER!
var LRUCache = function(capacity) {
    this.head = new Node()
    this.curr = this.head
    
    this.capacity = capacity
    this.map = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let res = -1
    if (this.map.has(key)) {
        let node = this.map.get(key)
        this.remove(node)
        this.add(node)
        return node.val
    }
    return res
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        let node = this.map.get(key)
        node.val = value
        this.remove(node)
        this.add(node)
        
    } else {

        if (this.map.size == this.capacity) {
            let secNode = this.head.next
            this.remove(secNode)
            
            this.map.delete(secNode.key)
        }
        let node = new Node(key, value)
        this.add(node)
        this.map.set(key, node)
    }
    
};

LRUCache.prototype.add = function(node) {
    this.curr.next = node
    node.prev = this.curr
    this.curr = node
}

LRUCache.prototype.remove = function(node) {
    if (this.curr == node) {
        this.curr = this.curr.prev
    }
    let next = node.next
    let prev = node.prev
    prev.next = next
    if(next) next.prev = prev
    
}


var Node = function(key, value) {
    this.key = key
    this.val = value
    this.next = null
    this.prev = null
}

var obj;
//  let input = ["LRUCache","put","put","get","put","get","put","get","get","get"]
//  let input2 = [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]

// let input = ["LRUCache","get","put","get","put","put","get","get"]
// let input2 = [[2],[2],[2,6],[1],[1,5],[1,2],[1],[2]]

// let input = ["LRUCache","put","get","put","get","get"]
// let input2 = [[1],[2,1],[2],[3,2],[2],[3]]

let input = ["LRUCache","put","put","put","put","get","get"]
let input2 = [[2],[2,1],[1,1],[2,3],[4,1],[1],[2]]

 for(let i=0;i<input.length;i++) {
    let val = input[i]
    if(val == "LRUCache") {
        obj = new LRUCache(input2[i][0])
    }
    if (val == "put") {
        obj.put(input2[i][0], input2[i][1])
        console.log(input2[i][0],input2[i][1]);
    }
    if(val == "get") {
        console.log(input2[i][0])
        console.log(obj.get(input2[i][0]));
        console.log(obj.map);
    }
    // console.log(obj);
 }