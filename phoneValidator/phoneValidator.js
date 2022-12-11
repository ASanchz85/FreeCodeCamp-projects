function telephoneCheck(str) {

    let condition = str.split("");
    let count = 0;
    let paranthesis = 0;
    let weird = 0;
  
    for (let i = 0; i < condition.length; i++) {
      if (condition[i] === '-') {
        count++;
        if (condition[0] === '-') {
          return false;
        }
      }
      if (condition[i] === '(') {
          paranthesis++;
        if (condition[i + 4] === ')') {
          paranthesis--;
        }
      }
      if (condition[i] === ')') {
         paranthesis++;
         if (condition[i - 4] === '(') {
         paranthesis--;
        }
      }
      if (condition[i] === '?' ||
      condition[i] === '!') {
        weird++;
      }
    }
  
    if (count > 2) {
      return false;
    }
  
    if (paranthesis != 0 || weird != 0) {
      return false;
    }
  
    let number = str.match(/\d/g);
  
  /*
    console.log(number);
    console.log(number.length);
  */
  
    if (number.length === 10) {
      return true;
    }
  
    if (number.length === 11 && number[0] === '1') {
      return true;
    }
  
    return false;
  }
  
  telephoneCheck("(555-555-5555)");