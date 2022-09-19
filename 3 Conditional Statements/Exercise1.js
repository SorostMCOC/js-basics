function solve(input){
    let price = 0;
    let productName = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    if (town == "Sofia") {
        if (productName == "coffee") {
            price = quantity * 0.50;
        } if (productName == "water"){
            price = quantity * 0.80;
        } if (productName == "beer"){
            price = quantity * 1.20;
        } if (productName == "sweets"){
            price = quantity * 1.45;
        } if (productName == "peanuts"){
            price = quantity * 1.60;
        }
    }
    else if (town == "Plovdiv"){
        if (productName == "coffee") {
            price = quantity * 0.40;
        } if (productName == "water"){
            price = quantity * 0.70;
        } if (productName == "beer"){
            price = quantity * 1.15;
        } if (productName == "sweets"){
            price = quantity * 1.30;
        } if (productName == "peanuts"){
            price = quantity * 1.50;
        }       
    }
    else if (town == "Varna"){
        if (productName == "coffee") {
            price = quantity * 0.45;
        } if (productName == "water"){
            price = quantity * 0.70;
        } if (productName == "beer"){
            price = quantity * 1.10;
        } if (productName == "sweets"){
            price = quantity * 1.35;
        } if (productName == "peanuts"){
            price = quantity * 1.55;
        }   
    }
    console.log(price);

}



solve(["coffee", "Varna", "2"])