function ranklist(input){
    let index = 0; // index = 0
    let tournaments = Number(input[index]);
    index++; // index = 1
    let startingPoints = Number(input[index]);
    index++; // index = 2
    let wins = 0;
    let addedPoints = 0;
    let averagePoints = 0;
    let winratio;

    for(i = 1; i <= tournaments; i++){
        let currentTournament = input[index];
        index++;
        switch(currentTournament){
            case "W":
                wins++;
                startingPoints += 2000;
                addedPoints += 2000;
                break;
            case "F":
                startingPoints += 1200;
                addedPoints += 1200;
                break;
            case "SF":
                startingPoints += 720;
                addedPoints += 720
                break;
        }
    }
    averagePoints = Math.floor(addedPoints/tournaments);
    winratio = ((wins/tournaments)*100).toFixed(2);
    console.log(`Final points: ${startingPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${winratio}%`);
}

ranklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])


