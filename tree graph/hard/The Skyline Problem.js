/*The Skyline Problem

A city's skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Now suppose you are given the locations and height of all the buildings as shown on a cityscape photo (Figure A), write a program to output the skyline formed by these buildings collectively (Figure B).

Buildings Skyline Contour
The geometric information of each building is represented by a triplet of integers [Li, Ri, Hi], where Li and Ri are the x coordinates of the left and right edge of the ith building, respectively, and Hi is its height. It is guaranteed that 0 ≤ Li, Ri ≤ INT_MAX, 0 < Hi ≤ INT_MAX, and Ri - Li > 0. You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.

For instance, the dimensions of all buildings in Figure A are recorded as: [ [2 9 10], [3 7 15], [5 12 12], [15 20 10], [19 24 8] ] .

The output is a list of "key points" (red dots in Figure B) in the format of [ [x1,y1], [x2, y2], [x3, y3], ... ] that uniquely defines a skyline. A key point is the left endpoint of a horizontal line segment. Note that the last key point, where the rightmost building ends, is merely used to mark the termination of the skyline, and always has zero height. Also, the ground in between any two adjacent buildings should be considered part of the skyline contour.

For instance, the skyline in Figure B should be represented as:[ [2 10], [3 15], [7 12], [12 0], [15 10], [20 8], [24, 0] ].

Notes:

The number of buildings in any input list is guaranteed to be in the range [0, 10000].
The input list is already sorted in ascending order by the left x position Li.
The output list must be sorted by the x position.
There must be no consecutive horizontal lines of equal height in the output skyline. For instance, [...[2 3], [4 5], [7 5], [11 5], [12 7]...] is not acceptable; the three lines of height 5 should be merged into one in the final output as such: [...[2 3], [4 5], [12 7], ...]*/

/**
 * @param {number[][]} buildings
 * @return {number[][]}
 */
//time O(nlogn) space O(N)
var getSkyline = function(buildings) {
    if(buildings.length == 0) return []
    let queue = new MaxQueue()
    let points = []
    for (let item of buildings) {
        let height = item[2]
        let startPoint = [item[0],height, "s"]
        let endPoint = [item[1],height, "e"]
        points.push(startPoint)
        points.push(endPoint)
    }
    points.sort((a,b)=>{
        if(a[0] == b[0]) {
            if(a[2] == "s" && b[2] == "s") {
                return b[1] - a[1]
            } else if (a[2] == "e" && b[2] == "e") {
                return a[1] - b[1]
            } else if(a[2] == "s" && b[2] == "e") {
                return -1
            } else {
                return 1
            }
        }
        return a[0] - b[0]
    })
    let maxValue = 0
    
    let res = []
    for(let point of points) {
        let x = point[0]
        let y = point[1]
        if(point[2] == "s") {
            queue.add(y)
            if(maxValue < queue.getMax()) {
                res.push([x,queue.getMax()])
                maxValue = queue.getMax()
            }
        } else {
            queue.delete(y)
            if(maxValue > queue.getMax()) {
                res.push([x,queue.getMax()])
                maxValue = queue.getMax()
            }
        }
    }
    return res
};

var MaxQueue = function() {
    this.arr = []
}

MaxQueue.prototype.search = function(num) {
    let left = 0
    let right = this.arr.length
    while(left<right) {
        let mid = left + ((right - left)>>1)
        if(this.arr[mid] < num) {
            left = mid+ 1
        } else {
            right = mid
        }
    }
    return left
}

MaxQueue.prototype.add = function(num) {
    let index = this.search(num)
    this.arr.splice(index,0,num)
}

MaxQueue.prototype.delete = function(num) {
    let index = this.search(num)
    this.arr.splice(index,1)
}
MaxQueue.prototype.getMax = function() {
    if(this.arr.length == 0) return 0
    return this.arr[this.arr.length - 1]
}

//----------------------------------------------------------------
//https://leetcode.com/problems/the-skyline-problem/discuss/395923/JavaScript-Easy-and-Straightforward-with-picture-illustrations
//time O(n^2) spaceO(n)
var getSkyline = function(buildings) {
    let points = new Set()
    for(let [l, r, h] of buildings) {
        points.add(l)
        points.add(r)
    }
    let res = [[0,0]]
    let points2 = [...points]
    points2.sort((a,b)=>a-b)
    for(let point of points2) {
        let height = 0
        
        for(let building of buildings) {
            if(building[0]<= point && building[1]> point){
                height = Math.max(height, building[2])
            }
        }
        
        if(res[res.length - 1][1] == height) continue
        res.push([point, height])
    }

    return res.slice(1)
};


// let input = [[2,9,10],[3,7,15],[5,12,12],[15,20,10],[19,24,8]]
// let input = [[2,4,7],[2,4,5],[2,4,6]]
// let input = [[0,2,3],[2,5,3]]
// let input = [[1,2,1],[1,2,2],[1,2,3],[2,3,1]]
let input = [[2,13,10],[10,17,25],[12,20,14]]
// let input = [[1,2,1],[1,2,2],[1,2,3]]
console.log(getSkyline(input));