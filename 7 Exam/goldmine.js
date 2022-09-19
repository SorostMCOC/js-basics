function solve(input){
    let index = 0;
    let locations = Number(input[index]);
    index++;
    let averageperday = Number(input[index]);
    index++;
    let days = Number(input[index]);
    index++;
    let goldcount = 0;
    let goldmined = 0;
    let average = 0;
    for(i = 1;i<=locations;i++){
        for(x = 1;x<=days;x++){
            goldmined = Number(input[index]);
            goldcount += goldmined;
            index++;
        }
        average = goldcount/days;
        if(average >= averageperday){
            console.log(`Good job! Average gold per day: ${average.toFixed(2)}.`);
        }
        if(average < averageperday){
            console.log(`You need ${(averageperday - average).toFixed(2)} gold.`)
        }
        averageperday = Number(input[index]);
        index++;
        days = Number(input[index]);
        index++;
        goldcount = 0;
    }    
}


solve(["2",
"10",
"3",
"10",
"10",
"11",
"20",
"2",
"20",
"10"])