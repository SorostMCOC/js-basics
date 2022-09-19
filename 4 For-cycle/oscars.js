function solve(input){
    let index = 0;
    let actor = input[index];
    index++;
    let academypoints = Number(input[index]);
    index++;
    let n = Number(input[index]);
    index++;


    for(i = 0; i < n; i++){
        let currentName = input[index];
        index++;
        let currentPoint = Number(input[index]);
        index++;
        let namepoints = currentName.length * currentPoint / 2;
        academypoints += namepoints;
        if(academypoints > 1250.5){
            console.log(`Congratulations, ${actor} got a nominee for leading role with ${(academypoints).toFixed(1)}!`);
            break;
        }

    }
    if(academypoints < 1250.5){
        console.log(`Sorry, ${actor} you need ${(1250.5 - academypoints).toFixed(1)} more!`)
    }
}

solve(["Sandra Bullock",
"340",
"5",
"Robert De Niro",
"50",
"Julia Roberts",
"40.5",
"Daniel Day-Lewis",
"39.4",
"Nicolas Cage",
"29.9",
"Stoyanka Mutafova",
"33"])

