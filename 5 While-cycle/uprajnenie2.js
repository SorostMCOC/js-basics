function exam(input){
    let n = Number(input[0]);
    let goodgrades = 0;
    let badgrades = 0;
    let gradesum = 0;
    let avg;
    let lastgrade;
    let index = 1;
    let lastproblem = input[index];
    while(lastproblem !== "Enough"){
        lastproblem = input[index];
        index++;
        lastgrade = Number(input[index]);
        index++;
        if(lastgrade <= 4){
            badgrades++;
            gradesum += lastgrade;
            if(badgrades === n){
                console.log(`You need a break, ${badgrades} poor grades.`);
                break;
            }
        }else if(lastgrade > 4){
            goodgrades++;
            gradesum += lastgrade;
        }
    }
    if(badgrades < n){
        avg = gradesum/(badgrades+goodgrades);
        console.log(`Average score: ${(avg).toFixed(2)}`);
        console.log(`Number of problems: ${(badgrades + goodgrades)}`);
        console.log(`Last problem: ${input[index - 4]}`);
    }
}

exam(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])


