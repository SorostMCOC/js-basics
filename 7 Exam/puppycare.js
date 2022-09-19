function puppy(input){
    let index = 0;
    let food = (Number(input[index]));
    let actualGrams = food*1000;
    index++;
    let totalEaten = 0;
    for(index = 1; index < input.length; index++){
        let n = input[index];
        if(n === "Adopted"){
            break;
        }
        let currentEaten = Number(n);
        if(currentEaten > 0){
            totalEaten += currentEaten;
        }
    }
    if(totalEaten <= actualGrams){
        console.log(`Food is enough! Leftovers: ${actualGrams - totalEaten} grams.`);
    }
    else{
        console.log(`Food is not enough. You need ${totalEaten - actualGrams} grams more.`);
    }
}