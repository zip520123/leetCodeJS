/*Find Median from Data Stream
Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.

For example,
[2,3,4], the median is 3

[2,3], the median is (2 + 3) / 2 = 2.5

Design a data structure that supports the following two operations:

void addNum(int num) - Add a integer number from the data stream to the data structure.
double findMedian() - Return the median of all elements so far.
 

Example:

addNum(1)
addNum(2)
findMedian() -> 1.5
addNum(3) 
findMedian() -> 2
 

Follow up:

If all integer numbers from the stream are between 0 and 100, how would you optimize it?
If 99% of all integer numbers from the stream are between 0 and 100, how would you optimize it?*/
/**
 * initialize your data structure here.
 */

// time O(NlogN * N) space O(N)
var MedianFinder = function() {
    this.list = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let left = 0
    let right = this.list.length - 1
    while(left < right) {
        let mid = left + ((right - left)>>1)
        if (this.list[mid] < num) {
            left = mid + 1
        } else {
            right = mid
        }
    }
    this.list.splice(left,0, num)
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    
    let res = 0
    let size = this.list.length 
    if (size % 2 == 0) {
        res = (this.list[size >> 1] + this.list[(size >> 1) - 1]) / 2
    } else {
        res = this.list[size>>1]
    }
    return res
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */


// insert sort time O(NlogN) space O(N)
var MedianFinder = function() {
    this.list = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    let left = 0
    let right = this.list.length - 1
    while(left < right) {
        let mid = left + ((right -left)>>1)
        if(this.list[mid] < num) {
            left = mid + 1
        }else{
            right = mid
        }
    }
    if (this.list[left] < num) {
        this.list.splice(left,0,num)
    } else {
        this.list.splice(left+1,0,num)
    }

};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    
    let res = 0
    let size = this.list.length 
    if (size % 2 == 0) {
        res = (this.list[size >> 1] + this.list[(size >> 1) - 1]) / 2
    } else {
        res = this.list[size>>1]
    }
    
    return res
};