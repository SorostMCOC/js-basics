//function swimRecord(input){
 //   worldRecord = Number(input[0]); //Световен рекорд
 //   meterDistance = Number(input[1]); //Разстояние на световен рекорд
 //   timeperMeter = Number (input[2]); //Скорост на Иванчо
 //   finalTime = meterDistance * timeperMeter;
 //   ivanchoTime = (meterDistance / 15) * 12.5;
 //   ivanchoFinal = finalTime + ivanchoTime;
 //   if(ivanchoFinal > worldRecord){
  //      console.log(`No, he failed! He was ${ivanchoFinal - worldRecord} seconds slower.`)
 //   } else {
 //       console.log(`Yes, he succeeded! The new world record is ${(ivanchoFinal).toFixed(2)} seconds.`)
 //   }

//}

//swimRecord(["55555", "3017", "5.03"])


function record(input){
    let worldRecord = Number(input[0]);
    let distance = Number(input[1]);
    let speed = Number(input[2]);
    let total = distance * speed;
    let slowness = (Math.floor(distance/15)) * 12.5;
    let totaltime = total + slowness;
    if(totaltime < worldRecord){
        console.log(`Yes, he succeeded! The new world record is ${(totaltime).toFixed(2)} seconds.`);
    }
    else{
        console.log(`No, he failed! He was ${(totaltime - worldRecord).toFixed(2)} seconds slower.`);
    }
}

record(["55555.67",
"3017",
"5.03"])

