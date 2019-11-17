/*
You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API bool isBadVersion(version) which will return whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

Example:

Given n = 5, and version = 4 is the first bad version.

call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true

Then 4 is the first bad version. 
*/

/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        //left = 0
        let left = 0
        //right = n
        let right = n
        //while(right - left != 1)
        while(right - left != 1){
          // mid = (left + right) / 2 | 0
          let mid = (left + right) / 2 | 0
        // isBadVersion(mid) ? right = mid : left = mid
          isBadVersion(mid) ? right = mid : left = mid
        }
        //return right
        return right
    };
};

var isBadVersion = function(n) {
    if (n == 1) return true
}
var solutionFunc = solution(isBadVersion)

solutionFunc(1)