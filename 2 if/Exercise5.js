function speedTime(input) {
    timeOne = Number(input[0]);
    timeTwo = Number(input[1]);
    timeThree = Number(input[2]);
    let totalTime = timeOne + timeTwo + timeThree;
    let minutes = Math.floor(totalTime / 60);
    let seconds = totalTime % 60; 
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    } else {
        console.log(`${minutes}:${seconds}`);
    }
}

speedTime(["50", "50", "49"])