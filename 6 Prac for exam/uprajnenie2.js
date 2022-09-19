function solve(input){
    let bitcoin = Number(input[0]);
    let yuan = Number(input[1]);
    let commission = (Number(input[2])/100);
    let bitcointotal = bitcoin * 1168;
    let yuanprice = yuan * 0.15;
    let yuanlev = yuanprice * 1.76;
    let total = bitcointotal + yuanlev;
    let eur = total/1.95;
    let eurfinal = eur - (eur*commission);
    console.log(`${(eurfinal).toFixed(2)}`);
}


solve(["20","5678","2.4"])
