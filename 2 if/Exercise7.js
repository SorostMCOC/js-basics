//function vacationFund(input) {
   // puzzlePrice = 2.60;
   // dollPrice = 3;
   // bearPrice = 4.10;
   // minionPrice = 8.20;
   // truckPrice = 2;
   // moneyNeeded = Number(input[0]);
    //puzzleCount = Number(input[1]);
   // dollCount = Number(input[2]);
  //  bearCount = Number(input[3]);
  //  minionCount = Number(input[4]);
  //  truckCount = Number(input[5]);
   // totalOrder = puzzleCount + dollCount + bearCount + minionCount + truckCount;
   // discount = 0;
   // totalPrice = (puzzleCount * puzzlePrice) + (dollCount * dollPrice) + (bearCount * bearPrice) + (minionCount * minionPrice) + (truckCount * truckPrice);
    //rent = totalPrice * 0.1;
    //finalPrice = 0;
    //if(totalOrder > 50) {
  //      discount = totalPrice * 0.25;
   //     finalPrice = totalPrice - discount - rent;    
  //  }
  //  if(finalPrice > moneyNeeded){
  //      console.log(`Yes! ${finalPrice} lv left.`);
  //  } else {
    //    console.log(`Not enough money!`);
  //  }
//}

//vacationFund(["7000", "20", "25", "30", "50", "10"]);

function toyShop(input){
    let excursion = Number(input[0]);
    let puzzels = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);
    let totalcount = puzzels + dolls + bears + minions + trucks;
    let profit = 2.6*puzzels + 3*dolls + 4.1*bears + 8.2*minions + 2*trucks;
    let rent;
    if(totalcount >= 50){
        profit = profit - (profit*0.25);
        rent = profit*0.1;
        profit = profit - rent;
        if(profit > excursion){
            console.log(`Yes! ${(profit - excursion).toFixed(2)} lv left.`);
        }
        else{
            console.log(`Not enough money! ${(excursion - profit).toFixed(2)} lv needed.`);
        }

    }
    else{
        rent = profit*0.1;
        profit = profit - rent;
        if(profit > excursion){
            console.log(`Yes! ${(profit - excursion).toFixed(2)} lv left.`);
        }
        else{
            console.log(`Not enough money! ${(excursion - profit).toFixed(2)} lv needed.`);
        }
    }
}

toyShop(["320",
"8",
"2",
"5",
"5",
"1"])

