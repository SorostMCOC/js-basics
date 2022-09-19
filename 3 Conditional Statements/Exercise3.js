function solve(input){
    let degrees = Number(input[0]);
    let daytime = (input[1]);
    let outfit;
    let shoes;
    if(degrees >= 10 && degrees <= 18){
        if(daytime === "Morning"){
            outfit = "Sweatshirt";
            shoes = "Sneakers";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        }
        if(daytime === "Afternoon" || daytime === "Evening"){
            outfit = "Shirt";
            shoes = "Moccasins";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        }
    }
    if(degrees > 18 && degrees <= 24){
        if(daytime === "Morning" || daytime === "Evening"){
            outfit = "Shirt";
            shoes = "Moccasins";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);            
        }
        if(daytime === "Afternoon"){
            outfit = "T-shirt";
            shoes = "Sandals";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        }
    }
    if(degrees >= 25){
        if(daytime === "Morning"){
            outfit = "T-shirt";
            shoes = "Sandals";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        }
        if(daytime === "Afternoon"){
            outfit = "Swim Suit";
            shoes = "Barefoot";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        }
        if(daytime === "Evening"){
            outfit = "Shirt";
            shoes = "Moccasins";
            console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`);
        }
    }
}

solve(["22","Afternoon"])