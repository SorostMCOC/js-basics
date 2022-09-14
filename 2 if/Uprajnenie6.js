//function hourTime(input) {
//   hours = Number(input[0]);
//   minutes = Number(input[1]);
//   totalMinutes = (hours * 60) + minutes + 15;
//   hoursOne = Math.floor(totalMinutes / 60);
//   hoursTwo = hours % 23;
//   newMinutes = totalMinutes % 60;
//   if(hours === 23) {
//       console.log(`0:0${newMinutes}`);
 //  } else if(newMinutes < 10) {
 //      console.log(`${hoursOne}:0${newMinutes}`);
 //  } else {
//      console.log(`${hoursOne}:${newMinutes}`);
//   }
//
//}

//hourTime(["23","59"])

function clock(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);
    let totalminutes = minutes + 15;
    let finalhours = 0;
    if(minutes >= 45 && minutes <= 54){
        finalhours = hours + 1;
        totalminutes = (minutes + 15) - 60;
        if(finalhours > 23){
            finalhours = finalhours - 24;
            console.log(`${finalhours}:0${totalminutes}`);
        }
        else if(finalhours <= 23){
            console.log(`${finalhours}:0${totalminutes}`)
        }
    }
    else if(minutes >= 55){
        finalhours = hours + 1;
        totalminutes = (minutes + 15) - 60;
        if(finalhours > 23){
            finalhours = finalhours - 24;
            console.log(`${finalhours}:${totalminutes}`);
        }
        else if(finalhours <= 23){
            console.log(`${finalhours}:${totalminutes}`)
        }
    }
    else{
        console.log(`${hours}:${totalminutes}`)
    }
}

clock(["12","49"])