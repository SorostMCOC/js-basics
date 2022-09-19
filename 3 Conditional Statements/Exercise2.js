function solve(input){
    let priceActual = input[0];
    let columns = Number(input[1]);
    let lines = (input[2]);
    if (priceActual === "Premiere"){
        console.log((12 * lines * columns).toFixed(2) + " leva");
    }
    else if(priceActual === "Normal"){
        console.log((7.5 * lines * columns).toFixed(2) + " leva");
    }
    else {
        console.log((5 * lines * columns).toFixed(2) + " leva");
    }
}

solve(["Premiere","10","12"])
