function solve(input){
    let city = input[0];
    let sales = Number(input[1]);
    let meter = 0;
    let aftercom;
    switch(city){
        case "Sofia":
            meter += 1;
            break;
        case "Varna":
            meter += 2;
            break;
        case "Plovdiv":
            meter += 3;
            break;
        default:
            break;
    }
    if(meter === 1){
        if(sales >= 0 && sales <= 500){
            aftercom = sales*0.95;
        }else if(sales > 500 && sales <= 1000){
            aftercom = sales*0.93;
        }else if(sales > 1000 && sales <= 10000){
            aftercom = sales*0.92;
        }else if(sales > 10000){
            aftercom = sales*0.88;
        }
    }else if(meter === 2){
        if(sales >= 0 && sales <= 500){
            aftercom = sales*0.955;
        }else if(sales > 500 && sales <= 1000){
            aftercom = sales*0.925;
        }else if(sales > 1000 && sales <= 10000){
            aftercom = sales*0.9;
        }else if(sales > 10000){
            aftercom = sales*0.87;
        }
    }else if(meter === 3){
        if(sales >= 0 && sales <= 500){
            aftercom = sales*0.945;
        }else if(sales > 500 && sales <= 1000){
            aftercom = sales*0.92;
        }else if(sales > 1000 && sales <= 10000){
            aftercom = sales*0.88;
        }else if(sales > 10000){
            aftercom = sales*0.855;
        }
    }
    if(aftercom > 0){
        console.log(`${(sales - aftercom).toFixed(2)}`);
    }else{
        console.log("error");
    }
}

solve(["Kaspichan",
"-50"])


