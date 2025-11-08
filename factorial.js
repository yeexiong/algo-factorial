function factorial(num) {
  let input = num;
  
  if (input < 0){
    return 1

  } else {
    let result = 1;

    for (let i = input; i >= 1; i--) {
      result *= i;
    }
  return result;
  }
}

module.exports = factorial;
