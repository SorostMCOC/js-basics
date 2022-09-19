function solve(input){
    let fruit = input[0];
    let set = input[1];
    let quantity = Number(input[2]);
    let smallprice = 0;
    let bigprice = 0;
    let total;
    let finalprice;
    switch(fruit){
        case "Watermelon":
            smallprice = 2 * 56;
            bigprice = 28.70 * 5;
            break;
        case "Mango":
            smallprice = 2 * 36.66;
            bigprice = 5 * 19.60;
            break;
        case "Pineapple":
            smallprice = 2 * 42.10;
            bigprice = 5 * 24.80;
            break;
        case "Raspberry":
            smallprice = 2 * 20;
            bigprice = 5 * 15.20;
            break;
    }
    if(set === "small"){
        total = smallprice * quantity;
    }
    else if(set === "big"){
        total = bigprice * quantity;
    }
    if(total < 400){
        finalprice = total;
        console.log(`${(finalprice).toFixed(2)} lv.`);
    }
    else if(400 <= total && total <= 1000){
        finalprice = total*0.85;
        console.log(`${(finalprice).toFixed(2)} lv.`);
    }
    else if(total > 1000){
        finalprice = total*0.5;
        console.log(`${(finalprice).toFixed(2)} lv.`)
    }
}

solve(["Raspberry",
"small",
"50"])



