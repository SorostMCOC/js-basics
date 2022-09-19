function solve(input){
    let type = input[0];
    let sex = input[1];
    let f = 0;
    let m = 0;
    let catmonths = 0;
    switch(type){
        case "British Shorthair":
            m = 13*12;
            f = 14*12;
            break;
        case "Siamese":
            m = 15*12;
            f = 16*12;
            break;
        case "Persian":
            m = 14*12;
            f = 15*12;
            break;
        case "Ragdoll":
            m = 16*12;
            f = 17*12;
            break;
        case "American Shorthair":
            m = 12*12;
            f = 13*12;
            break;
        case  "Siberian":
            m = 11*12;
            f = 12*12;
            break;
        default:
            console.log(`${type} is invalid cat!`);
            break;
    }
    if(sex === "m" && m > 0 && f > 0){
        catmonths = m/6;
        console.log(`${Math.floor(catmonths)} cat months`);
    }
    if(sex === "f" && m > 0 && f > 0){
        catmonths = f/6;
        console.log(`${Math.floor(catmonths)} cat months`);
    }
}

solve(["Persian",
"m"])

solve(["Siamese",
"f"])

solve(["Siberian",
"m"])