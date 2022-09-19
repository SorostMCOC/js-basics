function solve(input){
    let budget = Number(input[0]);
    let season = (input[1]);
    let fishers = Number(input[2]);
    let discount = 0;
    let finalprice;
    if(season === "Spring"){
        if(fishers <= 6 && fishers % 2 == 0){
            discount = 3000 * 0.15;
            finalprice = 3000 - discount;
            if(finalprice < budget){
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`);
            }
            if(finalprice > budget){
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        }
        else if(fishers <= 6 && fishers % 2 == 1){
            discount = 3000 * 0.1;
            finalprice = 3000 - discount;
            if(finalprice < budget){
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`);
            }
            if(finalprice > budget){
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        }
        else if(fishers >= 7 && fishers <= 11 && fishers % 2 == 0){
            discount = 3000 * 0.2
            finalprice = 3000 - discount;
            if(finalprice < budget){
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`);
            }
            if(finalprice > budget){
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        }
        else if(fishers >= 7 && fishers <= 11 && fishers % 2 == 1){
            discount = 3000 * 0.15;
            finalprice = 3000 - discount;
            if(finalprice < budget){
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`);
            }
            if(finalprice > budget){
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        }
        else if(fishers >= 12 && fishers % 2 == 0){
            discount = 3000 * 0.3;
            finalprice = 3000 - discount;
            if(finalprice < budget){
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`);
            }
            if(finalprice > budget){
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        }
        else if(fishers >= 12 && fishers % 2 == 1){
            discount = 3000 * 0.25;
            finalprice = 3000 - discount;
            if(finalprice < budget){
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`);
            }
            if(finalprice > budget){
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        }
    }
    else if(season == "Summer" || season == "Autumn"){
        if(season == "Summer" && fishers <= 6 && fishers % 2 == 0 || season == "Summer" && fishers >= 7 && fishers <= 11 && fishers % 2 == 1 || season == "Autumn" && fishers >= 7 && fishers <= 11){
            discount = 4200 * 0.15;
            finalprice = 4200 - discount;
            if(finalprice < budget){
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`);
            }
            if(finalprice > budget){
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        }
        else if(season == "Summer" && fishers <= 6 && fishers % 2 == 1 || season == "Autumn" && fishers <= 6){
            discount = 4200 * 0.1;
            finalprice = 4200 - discount;
            if(finalprice < budget){
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`);
            }
            if(finalprice > budget){
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        }
        else if(season == "Summer" && fishers >= 7 && fishers <= 11 && fishers % 2 == 0){
            discount = 4200 * 0.2;
            finalprice = 4200 - discount;
            if(finalprice < budget){
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`);
            }
            if(finalprice > budget){
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        }
        else if(season == "Summer" && fishers >= 12 && fishers % 2 == 1 || season == "Autumn" && fishers >= 12){
            discount = 4200 * 0.25;
            finalprice = 4200 - discount;
            if(finalprice < budget){
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`);
            }
            if(finalprice > budget){
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        }
        else if(season == "Summer" && fishers >= 12 && fishers % 2 == 0){
            discount = 4200 * 0.3;
            finalprice = 4200 - discount;
            if(finalprice < budget){
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`);
            }
            if(finalprice > budget){
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        }
    }
    else if(season = "Winter"){
        if(fishers <=6 && fishers % 2 == 0 || fishers >= 7 && fishers <= 11 && fishers % 2 == 1){
            discount = 2600 * 0.15;
            finalprice = 2600 - discount;
            if(finalprice < budget){
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`);
            }
            if(finalprice > budget){
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        }
        else if(fishers <= 6 && fishers % 2 ==1){
            discount = 2600 * 0.1;
            finalprice = 2600 - discount;
            if(finalprice < budget){
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`);
            }
            if(finalprice > budget){
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        }
        else if(fishers >= 7 && fishers <= 11 && fishers % 2 == 0){
            discount = 2600 * 0.2;
            finalprice = 2600 - discount;
            if(finalprice < budget){
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`);
            }
            if(finalprice > budget){
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        }
        else if(fishers >= 12 && fishers % 2 == 0){
            discount = 2600 * 0.3;
            finalprice = 2600 - discount;
            if(finalprice < budget){
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`);
            }
            if(finalprice > budget){
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        }
        else if(fishers >= 12 && fishers % 2 == 1){
            discount = 2600 * 0.25;
            finalprice = 2600 - discount;
            if(finalprice < budget){
                console.log(`Yes! You have ${(budget - finalprice).toFixed(2)} leva left.`);
            }
            if(finalprice > budget){
                console.log(`Not enough money! You need ${(finalprice - budget).toFixed(2)} leva.`)
            }
        }
    }

}

solve(["2000",
"Winter",
"13"])


