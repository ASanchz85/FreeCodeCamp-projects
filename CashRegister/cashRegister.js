function checkFunds (arr) {
  let result = 0;
  for (let [, value] of arr) {
    result += value;
  }
  return Number.parseFloat(result.toFixed(2));
}

function checkingCoins (origin, toCompare) {
  let units = [];

  for (let i = 0; i < origin.length; i++) {
      units.push(Math.round(toCompare[i][1] / origin[i][1]));
  }
  return units;
}

function checkCashRegister(price, cash, cid) {
  const coinTypes = [
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

  const difference = cash - price;
  let relativeDiff = difference;
  let moneyReturn = 0;
  let relativeChange = [...coinTypes];
  let change = [];

  if (difference > checkFunds(cid)) {
    return { status: "INSUFFICIENT_FUNDS", change: change };
  } else if (difference === checkFunds(cid)) {
    return { status: "CLOSED", change: cid };
  } else {
      cid = cid.reverse();
      let available = checkingCoins(coinTypes, cid);
      for (let i = 0; i < cid.length; i++) {
        while (relativeDiff >= coinTypes[i][1] && available[i] > 0) {
          relativeDiff -= coinTypes[i][1];
          moneyReturn += coinTypes[i][1];
          
          console.log("moneyReturn_While: " + moneyReturn);
          available[i]--;
          console.log("available_While: " + available[i]);
        }
        if (moneyReturn > 0) {
          console.log("problema aquí !!! " + i);
          change.push(moneyReturn);
        }
      }
  }


//debugging
 console.log("fondos totales: " + checkFunds(cid));
 console.log("parseo a int: " + !isNaN(checkFunds(cid)));
 console.log("cantidad a devolver: " + difference);
 console.log("cantidad relativa a devolver: " + relativeDiff * 100);
 console.log("cantidad ya devuelta: " + moneyReturn);
 console.log("parseo a int de cantidad relativa: " + !isNaN(relativeDiff));
 console.log("parseo a int de cantidad devuelta: " + !isNaN(moneyReturn));
 console.log("disponible: " + checkingCoins(coinTypes, cid));
 console.log("return de change: " + change);


/*  if (relativeDiff > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: change };
  }*/
  return { status: "OPEN", change: change };
}

/*
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
*/
/*
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
*/