function tank(input){
    let length = Number(input[0]);
    let width = Number(input[1]);
    let heigth = Number(input[2]);
    let sandpercent = Number(input[3])/100;
    let volume = length * width * heigth;
    let finalvolume = volume - volume*sandpercent;
    let finalfinal = finalvolume * 0.001;
    console.log(finalfinal); 
  }

  tank(["85 ","75 ","47 ","17 "])