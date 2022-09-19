function solve(input){
   let age = Number(input[0]);
   let washer = Number(input[1]);
   let toyprice = Number(input[2]);
   let totalmoney = 0;
   let totaltoys = 0;
   let moneyperbday = 10;
   let moneyfromtoys;
   let totalmoneymade;
   for(i = 1; i <= age; i++){
    if( i % 2 == 1){
        totaltoys += 1;
    }
    else if( i % 2 == 0){
        totalmoney += moneyperbday - 1;
        moneyperbday += 10;
    }
   }
   moneyfromtoys = totaltoys * toyprice;
   totalmoneymade = moneyfromtoys + totalmoney;
   if(totalmoneymade >= washer){
    console.log(`Yes! ${(totalmoneymade - washer).toFixed(2)}`);
   }
   else{
    console.log(`No! ${(washer - totalmoneymade).toFixed(2)}`);
   }
}

solve(["21",
"1570.98",
"3"])

