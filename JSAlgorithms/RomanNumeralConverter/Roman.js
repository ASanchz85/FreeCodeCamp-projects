function convertToRoman(num) {

    let str = num.toString().split("");
    let romanStr = [];
  
    for (let i = str.length - 1; i >= 0; i--) {
      if (i == 3) {
        if (str[str.length - 4] == 1) {
          romanStr[str.length - 4] = "M";
        } else if (str[str.length - 4] == 2) {
          romanStr[str.length - 4] = "MM";
        } else if (str[str.length - 4] == 3) {
          romanStr[str.length - 4] = "MMM";
        } 
      } else if (i == 2) {
        if (str[str.length - 3] == 1) {
          romanStr[str.length - 3] = "C";
        } else if (str[str.length - 3] == 2) {
          romanStr[str.length - 3] = "CC";
        } else if (str[str.length - 3] == 3) {
          romanStr[str.length - 3] = "CCC";
        } else if (str[str.length - 3] == 4) {
          romanStr[str.length - 3] = "CD";
        } else if (str[str.length - 3] == 5) {
          romanStr[str.length - 3] = "D";
        } else if (str[str.length - 3] == 6) {
          romanStr[str.length - 3] = "DC";
        } else if (str[str.length - 3] == 7) {
          romanStr[str.length - 3] = "DCC";
        } else if (str[str.length - 3] == 8) {
          romanStr[str.length - 3] = "DCCC";
        } else if (str[str.length - 3] == 9) {
          romanStr[str.length - 3] = "CM";
        } 
      } else if (i == 1) {
        if (str[str.length - 2] == 1) {
          romanStr[str.length - 2] = "X";
        } else if (str[str.length - 2] == 2) {
          romanStr[str.length - 2] = "XX";
        } else if (str[str.length - 2] == 3) {
          romanStr[str.length - 2] = "XXX";
        } else if (str[str.length - 2] == 4) {
          romanStr[str.length - 2] = "XL";
        } else if (str[str.length - 2] == 5) {
          romanStr[str.length - 2] = "L";
        } else if (str[str.length - 2] == 6) {
          romanStr[str.length - 2] = "LX";
        } else if (str[str.length - 2] == 7) {
          romanStr[str.length - 2] = "LXX";
        } else if (str[str.length - 2] == 8) {
          romanStr[str.length - 2] = "LXXX";
        } else if (str[str.length - 2] == 9) {
          romanStr[str.length - 2] = "XC";
        }   
      } else if (i == 0) {
          if (str[str.length - 1] == 1) {
            romanStr[str.length - 1] = "I";
          } else if (str[str.length - 1] == 2) {
            romanStr[str.length - 1] = "II";
          } else if (str[str.length - 1] == 3) {
            romanStr[str.length - 1] = "III";
          } else if (str[str.length - 1] == 4) {
            romanStr[str.length - 1] = "IV";
          } else if (str[str.length - 1] == 5) {
            romanStr[str.length - 1] = "V";
          } else if (str[str.length - 1] == 6) {
            romanStr[str.length - 1] = "VI";
          } else if (str[str.length - 1] == 7) {
            romanStr[str.length - 1] = "VII";
          } else if (str[str.length - 1] == 8) {
            romanStr[str.length - 1] = "VIII";
          } else if (str[str.length - 1] == 9) {
            romanStr[str.length - 1] = "IX";
          }
      }
    }
  
   // console.log(romanStr.join(""));
  
   return romanStr.join("");
  }
  
  convertToRoman(500);