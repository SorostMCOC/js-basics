function solve(input){
    gender = (input[0]);
    age = Number(input[1]);
    if(gender == "f"){
        if(age >= 16){
            console.log("Ms.");
        }
        else {
            console.log("Miss");
        }
    }
    else {
        if( age >= 16){
            console.log("Master");
        }
        else {
            console.log("Mr.")
        }
    }
}

solve(["f","17"])