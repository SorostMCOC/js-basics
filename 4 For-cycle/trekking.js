function solve(input){
    let n = Number(input[0]);
    let currentGroup;
    let Musala = 0;
    let Monblan = 0;
    let Kiliman = 0;
    let ktwo = 0;
    let everest = 0;
    let MusalaPercentage = 0;
    let MonblanPercentage = 0;
    let KilimanPercentage = 0;
    let ktwoPercentage = 0;
    let everestPercentage = 0;
    let totalpeople = 0;
    for(i = 1; i <= n; i++){
        currentGroup = Number(input[i]);
        totalpeople += currentGroup;
        if(currentGroup <= 5){
            Musala += currentGroup;
        }
        else if(currentGroup >= 6 && currentGroup <= 12){
            Monblan += currentGroup;
        }
        else if(currentGroup >= 13 && currentGroup <= 25){
            Kiliman += currentGroup;
        }
        else if(currentGroup >= 26 && currentGroup <= 40){
            ktwo += currentGroup;
        }
        else{
            everest += currentGroup;
        }
    }
    MusalaPercentage = (Musala/totalpeople)*100;
    MonblanPercentage = (Monblan/totalpeople)*100;
    KilimanPercentage = (Kiliman/totalpeople)*100;
    ktwoPercentage = (ktwo/totalpeople)*100;
    everestPercentage = (everest/totalpeople)*100;
    console.log(`${(MusalaPercentage).toFixed(2)}%`);
    console.log(`${(MonblanPercentage).toFixed(2)}%`);
    console.log(`${(KilimanPercentage).toFixed(2)}%`);
    console.log(`${(ktwoPercentage).toFixed(2)}%`);
    console.log(`${(everestPercentage).toFixed(2)}%`);
}

solve(["10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"])

