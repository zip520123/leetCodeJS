var bs = (arr,tar) => {
  left = 0
  right = arr.length 
  while(left != right){
      mid = (left + right) / 2 | 0
      // console.log(left,right,mid)
      if (arr[mid] <= tar){
        left = mid + 1
      }else{
        right = mid
      }
  }
  return left
  }
  tarr = [0,1,1,1,1,1,2,2,3,4,5]
  tar = 2
  res = bs(tarr,tar)
  console.log(res)
  console.log(tarr[res])