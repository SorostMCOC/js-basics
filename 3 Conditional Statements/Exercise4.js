function solve(input){
    let type = input[0];
    let count = Number(input[1]);
    let budget = Number(input[2]);
    let sum;
    let discount;
    if(type === "Roses"){
        if(count > 80){
            discount = (5*count)*0.1;
            sum = (5*count) - discount;
            if(sum>budget){
                console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`);
            }
            else{
                console.log(`Hey, you have a great garden with ${count} ${type} and ${(budget - sum).toFixed(2)} leva left.`)
            }
        }
        else{
            discount = 0;
            sum = 5*count;
            if(sum>budget){
                console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`);
            }
            else{
                console.log(`Hey, you have a great garden with ${count} ${type} and ${(budget - sum).toFixed(2)} leva left.`)
            }
        }
    }
    if(type === "Dahlias"){
        if(count > 90){
            discount = (3.8*count)*0.15;
            sum = (3.8*count) - discount;
            if(sum>budget){
                console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`);
            }
            else{
                console.log(`Hey, you have a great garden with ${count} ${type} and ${(budget - sum).toFixed(2)} leva left.`)
            }
        }
        else{
            discount = 0;
            sum = 3.8*count;
            if(sum>budget){
                console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`);
            }
            else{
                console.log(`Hey, you have a great garden with ${count} ${type} and ${(budget - sum).toFixed(2)} leva left.`)
            }
        }
    }
    if(type === "Tulips"){
        if(count > 80){
            discount = (2.8*count)*0.15;
            sum = (2.8*count) - discount;
            if(sum>budget){
                console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`);
            }
            else{
                console.log(`Hey, you have a great garden with ${count} ${type} and ${(budget - sum).toFixed(2)} leva left.`)
            }
        }
        else{
            discount = 0;
            sum = 2.8*count;
            if(sum>budget){
                console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`);
            }
            else{
                console.log(`Hey, you have a great garden with ${count} ${type} and ${(budget - sum).toFixed(2)} leva left.`)
            }
        }
    }
    if(type === "Narcissus"){
        if(count < 120){
            discount = (3*count)*0.15;
            sum = (3*count) + discount;
            if(sum>budget){
                console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`);
            }
            else{
                console.log(`Hey, you have a great garden with ${count} ${type} and ${(budget - sum).toFixed(2)} leva left.`)
            }
        }
        else{
            discount = 0;
            sum = 3*count;
            if(sum>budget){
                console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`);
            }
            else{
                console.log(`Hey, you have a great garden with ${count} ${type} and ${(budget - sum).toFixed(2)} leva left.`)
            }
        }
    }
    if(type === "Gladiolus"){
        if(count < 80){
            discount = (2.5*count)*0.2;
            sum = (2.5*count) + discount;
            if(sum>budget){
                console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`);
            }
            else{
                console.log(`Hey, you have a great garden with ${count} ${type} and ${(budget - sum).toFixed(2)} leva left.`)
            }
        }
        else{
            discount = 0;
            sum = 2.5*count;
            if(sum>budget){
                console.log(`Not enough money, you need ${(sum - budget).toFixed(2)} leva more.`);
            }
            else{
                console.log(`Hey, you have a great garden with ${count} ${type} and ${(budget - sum).toFixed(2)} leva left.`)
            }
        }
    }

}
solve(["Tulips",
"88",
"260"])
