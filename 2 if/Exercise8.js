//function filmBudget(input){
  //  realBudget = Number(input[0]);
  //  actorCount = Number(input[1]);
  //  dressPrice = Number(input[2]);
  // finalBudget = realBudget * 0.10;
 //   dressSpent = actorCount * dressPrice;
 //   discount = 0;
 ///   if(actorCount > 150){
 //       discount = dressSpent * 0.1;
  //      dressSpent = dressSpent - discount;
 //   }
 //   if(dressSpent > finalBudget){
 //       console.log(`Not enough money!`);
 //       console.log(`Wingard needs ${dressSpent - finalBudget} leva more.`);
 //   } else {
 //       console.log(`Action!`);
 //       console.log(`Wingard starts filming with ${finalBudget - dressSpent} leva left.`)
 //   }

//}

//filmBudget(["9587.88", "222", "55.68"])


function filmBudget(input){
   let budget = Number(input[0]);
   let statists = Number(input[1]);
   let priceperstatist = Number(input[2]); 
   let decor = budget*0.1;
   let clothesprice;
   let final;
   if(statists > 150){
       clothesprice = (statists*priceperstatist) - ((statists*priceperstatist)*0.1);
       final = clothesprice + decor;
       if(final < budget){
           console.log(`Action!`);
           console.log(`Wingard starts filming with ${(budget - final).toFixed(2)} leva left.`);
       }
       else{
           console.log(`Not enough money!`);
           console.log(`Wingard needs ${(final - budget).toFixed(2)} leva more.`);
       }
   }
   else{
       clothesprice = statists*priceperstatist;
       final = clothesprice + decor;
       if(final < budget){
           console.log(`Action!`);
           console.log(`Wingard starts filming with ${(budget - final).toFixed(2)} leva left.`);
       }
       else{
           console.log(`Not enough money!`);
           console.log(`Wingard needs ${(final - budget).toFixed(2)} leva more.`);
       }
   }
}

filmBudget(["9587.88",
"222",
"55.68"])


