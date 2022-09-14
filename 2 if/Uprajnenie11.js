function caniWatch(input){
    seriesName = (input[0]);
    episodeLength = Number(input[1]);
    breakTime = Number(input[2]);
    lunchTime = breakTime/8;
    chillTime = breakTime/4;
    timeLeft = breakTime - (lunchTime + chillTime);
    ihaveTime = timeLeft - episodeLength;
    idonthaveTime = Math.ceil(episodeLength - timeLeft);
    if(timeLeft >= episodeLength){
        console.log(`You have enough time to watch ${seriesName} and left with ${ihaveTime} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${seriesName}, you need ${idonthaveTime} more minutes.`);
    }
}

caniWatch(["Teen Wolf","48","60"])