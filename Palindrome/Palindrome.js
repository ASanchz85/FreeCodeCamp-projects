function palindrome(str) {

    let strOrigin = str.toLowerCase().match(/[a-z0-9]/g).join("");
    let strReverse = strOrigin.split("").reverse().join("");
  
    //console.log(strOrigin);
    //console.log(strReverse);
  
    if (strOrigin !== strReverse) {
      return false;
    } else {
      return true;
    }
  }
  
  //palindrome("eye");
  //console.log(palindrome("race car"));