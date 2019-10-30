const big = Math.pow(2, 31) - 1
    const small = -Math.pow(2, 31)
    let sign = 1
    let res = 0
    
    for(let i = 0; i<str.length; i++){
      if(str[i] !== ' '){
        str = str.substr(i)
        break
      }
    }
    
    if(str[0] === '-'){
      sign = -1
    }else{
      if(str[0] === '+'){
        sign = 1
      }else{
        if(isNaN(str[0])){
          return 0
        }else{
          res = Number(str[0])
        }
      }
    }
  
    for(let i = 1; i<str.length; i++){
      let tmp = str[i]
      if(tmp !== ' ' && !isNaN(Number(tmp))){
        res = res * 10 + Number(tmp)
      }else{
        break
      }
    }
    res = sign * res
    res = res < small ? small : res
    res = res > big ? big : res
    return res