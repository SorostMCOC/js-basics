function solve(input){
    let minutesperday = Number(input[0]);
    let walksperday = Number(input[1]);
    let calories = Number(input[2]);
    let totalmins = minutesperday * walksperday;
    let burnedcalories = totalmins * 5;
    let fiftypercent = calories/2;
    if(fiftypercent <= burnedcalories){
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedcalories}.`);
    }
    else{
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedcalories}.`);
    }

}

solve(["15",
"2",
"500"])
