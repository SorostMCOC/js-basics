function solve(input){
    let item = input[0];
    let day = input[1];
    let amount = Number(input[2]);
    let price = 0;
    let dayOne = 0;
    let finalPrice;
    switch(day){
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            dayOne += 1;
            break;
        case "Saturday":
        case "Sunday":
            dayOne += 2;
            break;
        default:
            console.log("error");
            break;
    }
    if(dayOne === 1){
        switch(item){
            case "banana":
                price = 2.50;
                break;
            case "apple":
                price = 1.20;
                break;
            case "orange":
                price = 0.85;
                break;
            case "grapefruit":
                price = 1.45;
                break;
            case "kiwi":
                price = 2.70;
                break;
            case "pineapple":
                price = 5.50;
                break;
            case "grapes":
                price = 3.85;
                break;
            default:
                console.log("error");
                break;
        }
    }
    if(dayOne === 2){
        switch(item){
            case "banana":
                price = 2.70;
                break;
            case "apple":
                price = 1.25;
                break;
            case "orange":
                price = 0.90;
                break;
            case "grapefruit":
                price = 1.60;
                break;
            case "kiwi":
                price = 3.00;
                break;
            case "pineapple":
                price = 5.60;
                break;
            case "grapes":
                price = 4.20;
                break;
            default:
                console.log("error");
                break;   
        }
    }
    finalPrice = amount*price;
    if(finalPrice > 0){
        console.log(`${finalPrice.toFixed(2)}`);
    }
}

solve(["tomato",
"Monday",
"0.5"])
