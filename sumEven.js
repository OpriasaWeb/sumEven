function sumEvenNumbers(input) {
  // [...]
  var sumEven = 0;
  
  for(let i = 0; i < input.length; i++){
    
    if(input[i] % 2 == 0){
      sumEven += input[i];
    }
  
  }
  
  return sumEven;

}

console.log(sumEvenNumbers([70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85]));