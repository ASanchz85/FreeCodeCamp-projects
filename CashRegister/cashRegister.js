function checkFunds (arr) {
    let result = 0;
    for (let [, value] of arr) {
      result += value;
    }
    return Number.parseFloat(result.toFixed(2));
  }
  
  function checkingCoins (arr) {
  
    let units = [];
    const coins = [
      ["ONE HUNDRED", 100], 
      ["TWENTY", 20], 
      ["TEN", 10], 
      ["FIVE", 5], 
      ["ONE", 1], 
      ["QUARTER", 0.25],
      ["DIME", 0.1],
      ["NICKEL", 0.05],
      ["PENNY", 0.01]
      ];
  
    for (let i = 0; i < coins.length; i++) {
        units.push(Math.round(arr[i][1] / coins[i][1]));
    }
    return units;
  }
  
  
  function checkCashRegister(price, cash, cid) {
  
    const difference = cash - price;
    let relativeDiff = difference;
    let moneyReturn = 0;
    let relativeChange = [];
    let change = [];
  
    if (difference > checkFunds(cid)) {
      return { status: "INSUFFICIENT_FUNDS", change: change };
    } else if (difference === checkFunds(cid)) {
      return { status: "CLOSED", change: cid };
    } else {
        cid = cid.reverse();
        let available = checkingCoins(cid);
        for (let i = 0; i < cid.length; i++) {
          while (relativeDiff >= cid[i][1] && available[i] > 0) {
            relativeChange.push(cid[i][1]);
            relativeDiff -= cid[i][1];
            moneyReturn += cid[i][1];
            available[i]--;
          }
          if (moneyReturn > 0) {
            change.push(relativeChange);
          }
        }
    }
  
  
  //debugging
   console.log(checkFunds(cid));
   console.log(!isNaN(checkFunds(cid)));
   console.log(difference);
   console.log(relativeDiff);
   console.log(moneyReturn);
   console.log("available: " + checkingCoins(cid));
   console.log("change: " + change);
  
  
    if (relativeDiff > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: change };
    }
    return { status: "OPEN", change: change };
  }
  
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));