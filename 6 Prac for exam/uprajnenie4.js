function solve(input){
    let record = Number(input[0]);
    let distance = Number(input[1]);
    let timepermeter = Number(input[2]);
    let initialtime = distance * timepermeter;
    let slowness = (Math.floor(distance/50)) * 30;
    let finaltime = initialtime + slowness;
    if(finaltime < record){
        console.log(`Yes! The new record is ${(finaltime).toFixed(2)} seconds.`);
    }
    else{
        console.log(`No! He was ${(finaltime - record).toFixed(2)} seconds slower.`)
    }
}

solve(["1377",
"389",
"3"])


