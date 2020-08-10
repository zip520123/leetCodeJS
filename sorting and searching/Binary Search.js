var bs = (arr,tar) => {
  let left = 0
  let right = arr.length - 1
  while(left < right){
      let mid = left + ((right - left)>>1)
      console.log(left,right,mid)
      if (arr[mid] == tar) {
        return mid
      } else if(arr[mid] > tar){
        right = mid - 1
      } else {
        left = mid + 1
      }
    }
    if (arr[left] != tar) return -1
    return left
  }
  tarr = [0,1,1,1,1,1,2,2,3,4,5,7]
  tar = 2
  res = bs(tarr,tar)
  console.log(res)
  console.log(tarr[res])