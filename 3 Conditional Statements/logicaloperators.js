function solve(input){
    let number = Number(input[0]);
    if(number > 0 && number < 100){
        console.log("Yes");
    }
    else if(number < 0 && number > -100){
        console.log("Yes");
    } 
    else {
        console.log("No");
    }
}

solve(["99"])