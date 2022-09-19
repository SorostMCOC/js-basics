function vacation(input){
    let index = 0;
    let neededMoney = Number(input[index]);
    index++;
    let savedMoney = Number(input[index]);
    index++;
    let spendingDays = 0;
    let totalDays = 0;
    for(index = 2;index < input.length;index++){
        let currentInput = input[index];
        let currentMoney = Number(input[index]);
        if(currentInput === "spend"){
            index++;
            spendingDays += 1;
            totalDays += 1;
            currentMoney = Number(input[index]);
            savedMoney -= currentMoney;
            if(savedMoney < 0){
                savedMoney = 0;
            }
            if(spendingDays === 5){
                console.log(`You can't save the money.`);
                console.log(`${totalDays}`);
                break;
            }
        }
        if(currentInput === "save"){
            index++;
            totalDays += 1;
            currentMoney = Number(input[index]);
            savedMoney += currentMoney;
        }
    }
    if(savedMoney >= neededMoney){
        console.log(`You saved the money for ${totalDays} days.`);
    }
}

vacation(["250",
"150",
"spend",
"50",
"spend",
"50",
"save",
"100",
"save",
"100"])



