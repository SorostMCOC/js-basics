function solve(input){
    let budget = Number(input[0]);
    let season = (input[1]);
    let moneyspent;
    let stay;
    let where;
    if(budget <= 100 && season == "summer"){
        moneyspent = budget * 0.3;
        where = "Bulgaria";
        stay = "Camp";
        console.log(`Somewhere in ${where}`);
        console.log(`${stay} - ${(moneyspent).toFixed(2)}`);
    }
    else if(budget <= 100 && season == "winter"){
        moneyspent = budget * 0.7;
        where = "Bulgaria";
        stay = "Hotel"
        console.log(`Somewhere in ${where}`);
        console.log(`${stay} - ${(moneyspent).toFixed(2)}`);
    }
    else if(budget <= 1000 && budget > 100 && season == "summer"){
        moneyspent = budget * 0.4;
        where = "Balkans";
        stay = "Camp";
        console.log(`Somewhere in ${where}`);
        console.log(`${stay} - ${(moneyspent).toFixed(2)}`);
    }
    else if(budget <= 1000 && budget > 100 && season == "winter"){
        moneyspent = budget * 0.8;
        where = "Balkans";
        stay = "Hotel";
        console.log(`Somewhere in ${where}`);
        console.log(`${stay} - ${(moneyspent).toFixed(2)}`);
    }
    else if(budget > 1000 & season == "summer" || budget > 1000 && season == "winter"){
        moneyspent = budget * 0.9;
        where = "Europe";
        stay = "Hotel";
        console.log(`Somewhere in ${where}`);
        console.log(`${stay} - ${(moneyspent).toFixed(2)}`);
    }
}

solve(["1500","summer"])