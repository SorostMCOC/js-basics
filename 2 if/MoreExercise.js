function speed(input){
    let speedy = Number(input);
    if(speedy <= 10){
        console.log("slow");
    }
    else if(speedy > 10 && speedy <= 50){
        console.log("average");
    }
    else if(speedy > 50 && speedy <= 150){
        console.log("fast");
    }
    else if(speedy > 150 && speedy <= 1000){
        console.log("ultra fast");
    }
    else{
        console.log("extremely fast");
    }
}