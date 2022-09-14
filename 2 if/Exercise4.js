function squareUp(input) {
    let geometryType = (input[0]);
    let lengthOne = (input[1]);
    let lengthTwo = (input[2]);
    if (geometryType == "square") {
        console.log(lengthOne * lengthOne);
    } else if (geometryType == "rectangle") {
        console.log(lengthOne * lengthTwo);
    } else if (geometryType == "triangle") {
        console.log((lengthOne * lengthTwo)/2);
    } else {
        console.log(Math.PI * lengthOne * lengthOne);
    }
}

squareUp(["square","5"])

// function squareUp(input){
    //let shape = input[0];
    //let area = 0;
    //if(shape === "square") {
      //  let side = Number(input[1]);
        //area = side * side;
    //} else if(shape === "rectangle") {
      //  let sideA = Number(input[1]);
      //  let sideB = Number(input[2]);
      //  area = sideA * sideB;
    //} else if(shape === "triangle") {
      //  let sideA = Number(input[1]);
      //  let sideB = Number(input[2]);
      //  area = (sideA * sideB)/2;
    //} else {
      //  let side = Number(input[1]);
      //  area = side * 2 * Math.PI;
    //}
    //console.log((area).toFixed(3));
//}

//squareUp(["circle", "5"])