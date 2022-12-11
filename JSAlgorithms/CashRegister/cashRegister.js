//checking funds in our cash register
function checkFunds (arr) {
  let result = 0;
  for (let [, value] of arr) {
    result += value;
  }
  return Number.parseFloat(result.toFixed(2));
}

//checking the number of each kind of coins or banknotes are available
function checkingCoins (origin, toCompare) {
  let units = [];

  for (let i = 0; i < origin.length; i++) {
      units.push(Math.round(toCompare[i][1] / origin[i][1]));
  }
  return units;
}

function checkCashRegister(price, cash, cid) {
//list of each kind of coins and banknotes
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

/*
checking previous conditions
1st: if cash-in-drawer is less than the change due, or if you cannot return the exact change.
2nd: if it is equal to the change due.
*/
  if (difference > checkFunds(cid)) {
    return { status: "INSUFFICIENT_FUNDS", change: change };
  } else if (difference === checkFunds(cid)) {
    return { status: "CLOSED", change: cid };
  } else {
    //main algorithm to calculate the exact change
      cid = cid.reverse();
      let available = checkingCoins(coinTypes, cid);
      for (let i = 0; i < coinTypes.length; i++) {
        while (relativeDiff.toFixed(2) >= coinTypes[i][1] && available[i] > 0) {
          relativeDiff -= Number.parseFloat(coinTypes[i][1].toFixed(2));
          moneyReturn += Number.parseFloat(coinTypes[i][1].toFixed(2));
          available[i]--;
        }
        if (moneyReturn > 0) {
            if (moneyReturn - Math.floor(moneyReturn) !==0) {
              relativeChange[i][1] = Number.parseFloat(moneyReturn.toFixed(2));
            } else {
              relativeChange[i][1] = Number.parseFloat(moneyReturn.toFixed(2));
            }
        } else {
          relativeChange[i][1] = Number.parseFloat(moneyReturn.toFixed(2));
        }
      }
  }

//checking if we will be able to return the exact change
  if (difference > checkFunds(relativeChange)) {
    return { status: "INSUFFICIENT_FUNDS", change: change };
  }

//filtering array to parse float numbers and remove '0' items
  for (let i = relativeChange.length - 1; i >= 0; i--) {
    if (relativeChange[i][1] !== 0) {
      relativeChange[i][1] = relativeChange[i][1] - relativeChange[i - 1][1];
      relativeChange[i][1] = Number.parseFloat(relativeChange[i][1].toFixed(2));
        if (relativeChange[i][1] !== 0) {
        change.push(relativeChange[i]);
        }
      }
  }

  change.reverse();
  return { status: "OPEN", change: change };
}


console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));

console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));