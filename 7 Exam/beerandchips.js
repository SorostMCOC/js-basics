function solve(input){
    let name = input[0];
    let budget = Number(input[1]);
    let beercount = Number(input[2]);
    let chipscount = Number(input[3]);
    let beertotal = beercount*1.20;
    let chipsprice = beertotal*0.45;
    let chipstotal = Math.ceil(chipscount*chipsprice);
    let total = chipstotal + beertotal;
    if(total <= budget){
        console.log(`${name} bought a snack and has ${(budget-total).toFixed(2)} leva left.`)
    }else{
        console.log(`${name} needs ${(total-budget).toFixed(2)} more leva!`)
    }
}


solve(["Valentin",
"5",
"2",
"4"])
