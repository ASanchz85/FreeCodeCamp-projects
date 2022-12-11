function rot13(str) {

    let abc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let newArr = abc.split("");
    let swap = str.split("");
    let result = [];
  
  /*  console.log(abc.length);
    console.log(newArr);
    console.log(newArr.length);
  */
  
    for (let i = 0; i < swap.length; i++) {
  //    console.log(swap[i]);
      for (let j = 0; j < newArr.length; j++) {
        if (swap[i] == newArr[j]) {
          if ((j - 13) < 0) {
            let k = 26 + (j - 13);
            result[i] = newArr[k];
          } else {
            result[i] = newArr[j - 13];
          }
        } 
        if (swap[i] == ' ' ||
         swap[i] == '!' ||
         swap[i] == '?' ||
         swap[i] == '.' ||
         swap[i] == ',') {
          result[i] = swap[i];
        }
      }
    }
   // console.log(result.join(""));
    return result.join("");
  }
  
  rot13("SERR PBQR PNZC");