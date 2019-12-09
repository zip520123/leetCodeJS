/*Merge Sort*/

//--recursive
const mergeSort = (arr) =>{
  if (arr.length == 1)return arr
  let mid = arr.length / 2 | 0
  let left = arr.slice(0,mid)
  let right = arr.slice(mid)
  return merge(mergeSort(left),mergeSort(right))
}

//iteritave

/*# Iterative Merge sort (Bottom Up) 

# Iterative mergesort function to 
# sort arr[0...n-1] 
def mergeSort(a): 
	
	current_size = 1
	
	# Outer loop for traversing Each 
	# sub array of current_size 
	while current_size < len(a) - 1: 
		
		left = 0
		# Inner loop for merge call 
		# in a sub array 
		# Each complete Iteration sorts 
		# the iterating sub array 
		while left < len(a)-1: 
			
			# mid index = left index of 
			# sub array + current sub 
			# array size - 1 
			mid = left + current_size - 1
			
			# (False result,True result) 
			# [Condition] Can use current_size 
			# if 2 * current_size < len(a)-1 
			# else len(a)-1 
			right = ((2 * current_size + left - 1, 
					len(a) - 1)[2 * current_size 
						+ left - 1 > len(a)-1]) 
							
			# Merge call for each sub array 
			merge(a, left, mid, right) 
			left = left + current_size*2
			
		# Increasing sub array size by 
		# multiple of 2 
		current_size = 2 * current_size 

# Merge Function 
def merge(a, l, m, r): 
	n1 = m - l + 1
	n2 = r - m 
	L = [0] * n1 
	R = [0] * n2 
	for i in range(0, n1): 
		L[i] = a[l + i] 
	for i in range(0, n2): 
		R[i] = a[m + i + 1] 

	i, j, k = 0, 0, l 
	while i < n1 and j < n2: 
		if L[i] > R[j]: 
			a[k] = R[j] 
			j += 1
		else: 
			a[k] = L[i] 
			i += 1
		k += 1

	while i < n1: 
		a[k] = L[i] 
		i += 1
		k += 1

	while j < n2: 
		a[k] = R[j] 
		j += 1
		k += 1


# Driver code 
a = [12, 11, 13, 5, 6, 7] 
print("Given array is ") 
print(a) 

mergeSort(a) 

print("Sorted array is ") 
print(a) 

# Contributed by Madhur Chhangani [RCOEM] 
*/
//--
const merge = (left,right) => {
  let l = 0, r = 0
  resArr = []
  while(l < left.length,r < right.length){
    if (left[l] < right[r]){
      resArr.push(left[l])
      l++
    }else{
      resArr.push(right[r])
      r++
    }
  }
  return resArr.concat(left.slice(l)).concat(right.slice(r))
}



test2 = [-1 ,-2,-3,-5,-10,10]
console.log(mergeSort(test2))


