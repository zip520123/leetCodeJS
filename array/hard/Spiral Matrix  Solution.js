/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    if (matrix.length == 0){
        return []
    }
    let res = []
    let r = 0
    let c = 0
    let d = "left"
    let seen = []
    for (i=0;i<matrix.length;i++){
        seen.push([])
    }
    for (let i =0;i< (matrix.length * matrix[0].length);i++ ) {
        res.push(matrix[r][c])
        seen[r][c] = true
        if (d == "left") {
            if ((c + 1) >= matrix[0].length || seen[r][c+1] == true) {
                d = changeDrection(d)
                r += 1
                continue
            }
            c += 1
        } else if (d == "bottom") {
            if ((r+1) >= matrix.length || seen[r+1][c] == true) {
                d = changeDrection(d)
                c -= 1
                continue
            }
            r += 1
        } else if (d == "right") {
            if ((c-1) < 0 || seen[r][c - 1] == true ) {
                d = changeDrection(d)
                r -= 1
                continue
            }
            c -= 1
        } else {
            if ((r-1) < 0 || seen[r-1][c] == true) {
                d = changeDrection(d)
                c += 1
                continue
            }
            r -= 1
        }
        
    }
    return res
};

var changeDrection = (d) => {
    if (d == "left") {
        return "bottom"
    } else if (d=="bottom") {
        return "right"
    } else if (d == "right") {
        return "top"
    } else if (d == "top") {
        return "left"
    }
}